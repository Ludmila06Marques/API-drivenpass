import express, {json} from "express";
import dotenv from "dotenv";
import cors from "cors";



dotenv.config();

import router from "./routes/index.js";
import handleErrorsMiddleware from "./middlewares/error.js";

const app = express();

app.use(json());
app.use(cors());

app.use(router);
app.use(handleErrorsMiddleware)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});