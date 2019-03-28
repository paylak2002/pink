const express = require("express")
const app = express()
const port = process.env.PORT || 3000
app.listen(port,()=>{console.log("start")})
app.use(express.static('.'))
app.get("/",(req,res)=>{res.sendFile(__dirname + "/index.html")})
