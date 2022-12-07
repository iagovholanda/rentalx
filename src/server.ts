import express from "express";

import { router } from "./routes"; /* Nao definindo o arquivo ele ja reconhece como index.ts */

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running ! 🚀"));
