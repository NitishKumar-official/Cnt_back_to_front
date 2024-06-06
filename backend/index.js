

//connection of backend with frontend


const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true }));     //iska kam hai url se jo data aaya usko express ke liye readable form me convert krna
app.use(express.json());                            //iska kam hai json form me convert krna


app.get("/register",(req,res)=>{
    let {user,pass} = req.query;                         //get method wala data req.query me rhta hai
    res.send(`standard GET response , welcome ${user}`)
})

app.post("/register",(req,res)=>{
    let {user, pass} = req.body;                         //post method wala data req.body me rhata jisko ki convert krna padta jai app.use ka use krke jaise uper me kiye hai
    res.send(`standard GET response , welcome ${user}`)
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});

