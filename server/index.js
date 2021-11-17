const express = require("express");

const path = require("path");

const app = express();

// console.log(path.join(__dirname, "../index.html"))
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../index.html'));
})

const port = process.env.PORT || 4110

app.listen(port, () =>{
    console.log(`we vibing on port ${port}`)
})