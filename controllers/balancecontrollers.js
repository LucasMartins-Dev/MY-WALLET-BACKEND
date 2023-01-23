import { db, objectId } from "../src/app.js";
import dayjs from "dayjs";

export async function getitens(req, res) {
  const findToken = res.locals.user
 
  try{
      const Walletregist = await db.collection("wallet").find({userId: findToken.user}).toArray()
      console.log(Walletregist)
      res.status(200).send(Walletregist.reverse())
  }catch(error){
      res.status(500).send(error.message)
  }
  }


export async function create (req, res){

  const findToken = res.locals.user
  const wallet = req.body
  try{
    await db.collection('wallet').insertOne(
      {value:wallet.value, 
        description :wallet.description,
        type:wallet.type,
        date: dayjs().format('DD/MM'),
        userId: findToken.user})
  
        res.send('ok')
  }catch(error){
    res.status(500).send(error.message)
  }
  
}

