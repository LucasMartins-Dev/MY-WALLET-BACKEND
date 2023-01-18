import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import joi from "joi";
import authRoutes from "./routes/authRoutes.js";
import balanceRoutes from "./routes/balanceRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
} catch (erro) {
  console.log(erro);
}

const db = mongoClient.db("myWalletDb");
const objectId = ObjectId;

const balanceSchema = joi.object({
    description: joi.string().required().min(2).max(30),
    value: joi.number().required(),
    type: joi.string().valid('income','outcome').required(),
    date: joi.string().required()
  });

  const userSchema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().email().required(),
    password: joi.string().required().min(3),
  });

app.use(autrouters);
app.use(balancerouters);

app.listen(5000, () => console.log("Server rodando"));