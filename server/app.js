import dotenv from "dotenv";

dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { SummaryRouter } from "./routes/server.router.js";
import { GoogleGenerativeAI } from "@google/generative-ai";


const app = express();
const PORT = process.env.PORT || 5000;

// Correct way to initialize GoogleGenerativeAI by passing the API key string directly
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Pass the genAI instance to the router function and use the returned router object
app.use(SummaryRouter({genAI}));

app.listen(PORT, () => {
  console.log(`The server is running at port = ${PORT}`);
});
