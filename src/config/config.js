require('dotenv').config({path: '../.env'});
const getEnvVariable = (varName) => {
    const value = process.env[varName];
    if (value === undefined) {
        console.log(`Error: Environment variable ${varName} is not defined.`);
        process.exit(1);
    }
    return value;
};
const config = {
    port: getEnvVariable('PORT'),
    secret: getEnvVariable('SECRET'),
    mailerUser: getEnvVariable('MAILER_USER'),
    mailerPass: getEnvVariable('MAILER_PASS'),
};
module.exports = config;