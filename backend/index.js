// creez API
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import sqlite from 'sqlite3';
import Bug from './Entitati_Tabele/Bug.js';
import Utilizator from './Entitati_Tabele/Utilizator.js';
import sqlite3 from 'sqlite3';
import sequelize from './Baza_date.js';


let app=express();
// let router= express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
import router from "./Rute/toateRutele.js";
app.use("/api",router);

//crearea bazei de date 
// const sequelize = require('./Baza_date.js');
sequelize.sync().then(()=>console.log(`baza de date a fost creata`));

// app.get("/", (req, res)=>
//     res.status(200).send({message:"Succes!"}));
// //insert

// app.post('bugs',(req, res)=>{
//     Bug.create(req.body).then(()=>{
//         res.send('Bug-ul a fost adaugat');
//     })
// })


// app.post('utilizatori',(req, res)=>{
//     Utilizator.create(req.body).then(()=>{
//         res.send('Utilizatorul a fost creat');
//     })
// })


// app.use('/api',router);




let port=process.env.PORT || 8000;
app.listen(port);
console.log(`API a fost creat la ${port}`);