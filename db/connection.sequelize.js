
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "admin",
    DB: "dentic",
    dialect: "postgres",
    port: 5432,
    native: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
/*
module.exports = {
    HOST: "ec2-3-223-242-224.compute-1.amazonaws.com",
    USER: "bsbkchfrdbcmlu",
    PASSWORD: "501bf4b96b64ca25a39e372e977918ee6115665bee4b4f9e272d51f1b6e9eba9",
    DB: "ddohi0idqqpu7q",
    dialect: "postgres",
    port: 5432,
    native: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};*/