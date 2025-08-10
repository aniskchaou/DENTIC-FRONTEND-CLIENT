let chatPipeline;
let pipelineLoaded = false;

async function loadPipeline() {
  if (!pipelineLoaded) {
    const { pipeline } = await import('@xenova/transformers');
    chatPipeline = await pipeline('text-generation', 'Xenova/gpt2'); // or another supported model
    pipelineLoaded = true;
  }
}
loadPipeline();

/**
 * @swagger
 * /ai/chat:
 *   post:
 *     summary: Get AI chatbot response
 *     tags: [AI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: AI chatbot response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 */
exports.chat = async (req, res) => {
  if (!pipelineLoaded) {
    await loadPipeline();
    if (!pipelineLoaded) {
      return res.status(503).send({ message: "AI model loading, try again soon." });
    }
  }
  const { message } = req.body;
  try {
    const result = await chatPipeline(message, { max_new_tokens: 50 });
    res.send({ response: result[0].generated_text });
  } catch (err) {
    res.status(500).send({ message: "AI error", error: err });
  }
};

/**
 * @swagger
 * /ai/treatment-recommendation:
 *   post:
 *     summary: Get AI treatment recommendation
 *     tags: [AI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               symptoms:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: AI treatment recommendation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recommendation:
 *                   type: string
 */
const ort = require("onnxruntime-node");
const fs = require("fs");

const TREATMENTS = ["Deep Cleaning", "Root Canal", "Filling"];

exports.treatmentRecommendation = async (req, res) => {
  try {
    const { symptoms, SYMPTOM_LIST } = req.body;

    if (!Array.isArray(SYMPTOM_LIST) || !Array.isArray(symptoms)) {
      return res.status(400).send({ message: "SYMPTOM_LIST and symptoms must be arrays." });
    }

    const inputArray = SYMPTOM_LIST.map(symptom => symptoms.includes(symptom) ? 1 : 0);
    const inputTensor = new ort.Tensor("float32", Float32Array.from(inputArray), [1, SYMPTOM_LIST.length]);

    const modelPath = "model/treatment_recommendation.onnx";
    if (!fs.existsSync(modelPath)) {
      return res.status(500).send({ message: "Model file not found." });
    }

    const session = await ort.InferenceSession.create(modelPath);
    const inputName = session.inputNames ? session.inputNames[0] : "input";
    const outputName = session.outputNames ? session.outputNames[0] : "output_label";

    const feeds = { [inputName]: inputTensor };
    const results = await session.run(feeds);

    // Get the output scores (logits)
    const output = results[outputName].data;
    // Find the index of the highest score
    const maxIdx = output.reduce((maxIdx, val, idx, arr) => val > arr[maxIdx] ? idx : maxIdx, 0);
    // Map to treatment name
    const recommendation = TREATMENTS[maxIdx];

    res.send({ recommendation });
  } catch (err) {
    res.status(500).send({ message: "AI error", error: err.toString() });
  }
};

/**
 * @swagger
 * /ai/image-diagnosis:
 *   post:
 *     summary: Diagnose dental image
 *     tags: [AI]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Diagnosis result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 diagnosis:
 *                   type: string
 */
exports.imageDiagnosis = async (req, res) => {
  // Use multer to handle file upload
  // Preprocess image, run ONNX model, map output to diagnosis
  // res.send({ diagnosis: "Possible caries detected" });
};

/**
 * @swagger
 * /ai/ondotogram-suggestion:
 *   post:
 *     summary: Suggest next treatment for a tooth
 *     tags: [AI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               teeth:
 *                 type: array
 *                 items:
 *                   type: object
 *     responses:
 *       200:
 *         description: Suggestion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 suggestion:
 *                   type: string
 */
exports.ondotogramSuggestion = async (req, res) => {
  // Preprocess teeth array, run ONNX model, map output to suggestion
  // res.send({ suggestion: "Consider root canal for tooth 22" });
};

/**
 * @swagger
 * /ai/clinic-qa:
 *   post:
 *     summary: Answer clinic info questions
 *     tags: [AI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               context:
 *                 type: string
 *     responses:
 *       200:
 *         description: Answer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 answer:
 *                   type: string
 */
exports.clinicQA = async (req, res) => {
  const { pipeline } = await import('@xenova/transformers');
  const qa = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad');
  const { question, context } = req.body;
  const result = await qa({ question, context });
  res.send({ answer: result.answer });
};