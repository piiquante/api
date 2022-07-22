import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { getEnv, log } from "./helpers";

const port = Number.parseInt(getEnv("PORT"));

const app = express();

app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    log(`Server listening on port ${port}`);
});
