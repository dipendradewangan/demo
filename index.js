const express = require("express");

const app = express()

const port = 4000

app.get("/products", (req, res, next)=>{
    res.status(200).json({
        message: "products get route is working"
    })
})

app.get("/", (req, res, next)=>{
    res.status(200).json({
        message: "app is running"
    })
})

app.listen(port, ()=>{
    console.log(`server is listening on the port : ${port}`)
})