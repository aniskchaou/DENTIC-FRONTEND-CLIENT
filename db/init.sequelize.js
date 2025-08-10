const { Sequelize } = require('sequelize');

const DEMO_MODE = false;

let sequelize;

if (DEMO_MODE) {
  // Demo mode: use SQLite (file-based for persistence, ':memory:' for in-memory)
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
  });
  console.log("Running in DEMO MODE with in-memory SQLite (cache).");
} else {
  // Production mode: use PostgreSQL
  sequelize = new Sequelize(
    'dentic',
    'dentic_user',
    'd6bltRW0pcaXGWnnp9O0SbFZSF0sBKMf', // This must be a string!
    {
      host: 'dpg-d2cebi1r0fns73dspo50-a.oregon-postgres.render.com',
      dialect: 'postgres',
      dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true, // For self-signed or managed certs
      }
    },
      logging: true,
    }
  );
  console.log("Running in PRODUCTION MODE with PostgreSQL database.");
}

module.exports = sequelize;
