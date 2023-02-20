const functions = require("firebase-functions");
const express = require('express')
const db = require('./db')
const cors = require('cors');

const app = express()

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hoise");
});

app.post("/pending", (req, res) => {
  const data = JSON.parse(req.body);

  const sql = `INSERT INTO pending(name,regNo,dept,phone,email,tshirt,transID,paymethod) VALUES ('${data.name}',${data.reg},'${data.dept}','${data.phone}','${data.email}','${data.tshirt}','${data.transId}','${data.payMethod}');`;

  
  db.query(sql,(err,result) =>{

    if(err) console.log(err)

    res.send(JSON.stringify(result))
  })
    
  console.log(data)
})

app.get("/pending",(req,res) => {
  const sql = `SELECT * FROM pending;`

  db.query(sql,(err,result) => {

    if(err) console.log(err);

    res.status('200').send(JSON.stringify(result))

  })

})

exports.api = functions.https.onRequest(app);


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
