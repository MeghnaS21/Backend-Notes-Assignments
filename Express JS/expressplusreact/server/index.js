const express = require('express')
// const cors = require('cors')

// const corsOptions ={
//     origin:'http://localhost:3002/home', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
const app = express()


const port = process.env.PORT || 3002;

//data file
const dataDb = require('./data/data')

// app.use(cors(corsOptions));

app.get("/home", (req, res)=>{
    // res.send(JSON.stringify(dataDb));
    res.json({"users": ["userone", "two", "three"]})
})

// app.get('/', (req, res) => {
//     res.send('hello World')
// })

app.listen(port, ()=>{
    console.log('Example app listening at..')
})