import dotenv from 'dotenv';

dotenv.config();

/* Server Configuration */
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

/* Postgresql Configurations */
const POSTGRESQL_URL: string = process.env.POSTGRESQL_URL || ''

export const config = {
    server: {
        port: SERVER_PORT
    },
    database: {
        url: POSTGRESQL_URL
    }
};