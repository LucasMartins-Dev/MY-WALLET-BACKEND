import { db } from "../src/app.js"

export default async function Tokenvalidate(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", '');
    if (!token) return res.status(422).send("Informe o token!");
    
  
  try{
      const findToken = await db.collection("sessions").findOne({token})
       
      if(!findToken) return res.status(400).send("Por favor retorne a página de login")

      res.locals.user = findToken;
      
      next()

  }catch(err){
      res.sendStatus(500)
  }
  

  
  }