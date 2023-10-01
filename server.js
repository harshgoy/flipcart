import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser"; 



const app=express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

// app.post('/api/create-checkout-session', async(req,res)=>{
//   const products =req.body;
//   console.log(products);
// })

const PORT=process.env.PORT||8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL=process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce.tprdmqk.mongodb.net/?retryWrites=true&w=majority`;

Connection(URL); 
if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'))
}



app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))
DefaultData();

