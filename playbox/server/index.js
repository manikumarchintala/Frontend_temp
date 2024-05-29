
const express = require('express');
const bodyparser = require('body-parser');
const { response } = require('../assignments/week-2/02-nodejs/fileServer');
const port = 3000
const app = express();
app.use(express.json());

app.get("/healthcheckup",function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kideneyid = req.query.kideneyid;
    
    if(username!= "mani" || password!="pass"){
        res.status(400).json({
           "res":"something wrong with your username"
        });
        return;
    };
    if(kideneyid!=1 && kideneyid!=2){
        res.status(400).json({
            "msg":"something is wrong with your inputs "
        });
        return;
    };
    response.json({
        "msg":"your kindeys are fine"
    });
});


app.post('/backend/conversation',function(req,res){
    const message = req.body.message;
    console.log(message);
    res.json({
        output:"2+2=4"
    })
});


app.get('/', function (req, res){ 
  res.send('Hello World!')
})

app.listen(port,()=>{
    console.log(`listening to the port numeber + ${port}`);
})