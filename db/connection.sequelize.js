// const { Sequelize } = require('sequelize');
// const DEMO_MODE = process.env.DEMO_MODE === "true";

// let sequelize;

// if (DEMO_MODE) {
//   // Use SQLite for demo mode (file or memory)
//   sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: './demo.sqlite', // or ':memory:' for in-memory
//     logging: false,
//   });
// } else {
//   // Use PostgreSQL for production
//   sequelize = new Sequelize(
//     process.env.PG_DATABASE,
//     process.env.PG_USER,
//     process.env.PG_PASSWORD,
//     {
//       host: process.env.PG_HOST,
//       dialect: 'postgres',
//       logging: false,
//     }
//   );
// }

// module.exports = sequelize;
