const express= require("express");
const app=express();
app.use(express.json());

var user=[{
    name:"john",
    kidneys:[{
        healthy:false
       
    }]
}];
app.get("/",function(req,res){
    const johnkidenystatus=user[0].kidneys;
    const numberofkidneys=johnkidenystatus.length;
    let numberofunhealthykidneys = 0;
    for(var i=0;i<johnkidenystatus.length;i++){
        if(johnkidenystatus[i].healthy){
            numberofunhealthykidneys = numberofunhealthykidneys+1
        }
    }
        const numberofhealthykidneys = numberofkidneys - numberofunhealthykidneys;
     res.json({
        numberofkidneys,
        numberofunhealthykidneys,
        numberofhealthykidneys
    })
});
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })
});
app.put("/",function(req,res){
    for(let i =0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy=true;
    }
    res.json({});
});
app.delete("/",function(req,res){
    var newarr=[];
    for(let i =0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            newarr.push({
                healthy:true
            })
        }
    }
    res.json({msg:"done"});
})



app.listen(3000);