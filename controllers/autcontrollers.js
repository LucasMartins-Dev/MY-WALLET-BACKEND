import { db } from "../dbConnection/mongo.js";
import bcrypt from "bcrypt";
import { v4 as tokenGenerator } from "uuid";


export async function signUp(req, res) {

    try {
      const existsUser = await db
        .collection("users")
        .find({ name: req.body.name })
        .toArray();
      if (existsUser.length !== 0) {
        console.log("Usuário já existe");
        console.log(existsUser);
        res.sendStatus(409);
        return;
      }
  
      const pswd = bcrypt.hashSync(req.body.password, 10);
      await db.collection("users").insertOne({
        name: req.body.name,
        email: req.body.email,
        password: pswd,
      });
      res.sendStatus(201);
    } catch (erro) {
      console.log(erro);
      return res.sendStatus(500);
    }
  }

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const existsUser = await db.collection("users").findOne({ email });
    if (!existsUser) {
      return res.sendStatus(401);
    }
    const pswd = bcrypt.compareSync(password, existsUser.password);

    if (!pswd) {
      return res.sendStatus(401);
    }
    const token = tokenGenerator();
    await db
      .collection("sessions")
      .insertOne({ token, userId: existsUser._id });

    res.send({ token });
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}
