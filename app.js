import express from 'express';      //change type to module for es6 imports in dependencies

const app = express();

app.get('/', (req, res) => {            //request comes from the client side and response is sent back from the server side
    return res.send('Hello World!');
})

//api
app.get("/home",(req,res)=>{
    //logic
    console.log("GET REQUEST");
    return res.send("This is a GET request");
})

app.post("/signup", (req, res) => {
    console.log("POST REQUEST");
    return res.send("This is a POST request");
})

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
})