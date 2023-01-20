import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import autrouters from "../routes/autrouters.js";
import balancerouters from "../routes/balancerouters.js";

dotenv.config()
const app= express()
app.use(cors())
app.use(express.json());
const PORT = 5000
const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
} catch (erro) {
  console.log(erro);
}

const db = mongoClient.db();
const objectId = ObjectId;

export { db, objectId };

app.use(autrouters);
app.use(balancerouters);

app.listen(PORT, () => console.log("Server rodando"));