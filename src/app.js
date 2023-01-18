import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import autrouters from "./routes/autrouters.js";
import balancerouters from "./routes/balanceRoutes.js";

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


app.use(autrouters);
app.use(balancerouters);

app.listen(5000, () => console.log("Server rodando"));