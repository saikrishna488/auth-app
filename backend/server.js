const express = require('express');
//importing data func 
const authCheck = require('./data/data')
const app = express();
const port = process.env.PORT || 5000
const cors = require("cors");

app.use(express.json());
app.use(
    cors({
      origin: "*",
    })
  );
app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    if(!username && !password){
        res.status(400).json({msg:"no username and password are provided"})
    }
    else{
        console.log(authCheck(username,password))
        const valid = authCheck(username,password)
        if(valid){
            res.status(200).json({login:true})
        }
        else{
            res.status(200).json({login:false})
        }
    }
});

app.listen(port,()=> console.log("server started on port "+ port));