const express =require('express')
const store=require("./Store/Storing")
const app=express();


app.use("/api",store)



app.listen(3000,()=>{
    console.log("server is running of store");
})
