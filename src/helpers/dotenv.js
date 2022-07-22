import { config } from "dotenv";

config();

export const getEnv = (key) => {
    const value = process.env[key];
    if (value === undefined)
        throw new Error(`Missing configuration key \`${key}\` in .env`);

    return value;
};
