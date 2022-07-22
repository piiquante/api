import moment from "moment";

const nowFormatted = () => moment(Date.now()).format("hh:mm:ss");

export const log = (message) => {
    console.log(`[${nowFormatted()}] ${message}`);
};

export const logFatal = (message) => {
    console.log(`[${nowFormatted()}] ERROR: ${message}`);
    process.exit(1);
};
