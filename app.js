import express from 'express';      //change type to module for es6 imports in dependencies

const app = express();

app.get('/', (req, res) => {            //request comes from the client side and response is sent back from the server side
    return res.send('Hello World!');
})

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
})