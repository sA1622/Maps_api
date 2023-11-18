const express = require("express")
const app = express()
app.use(express.static("public"))
app.set("view engine","ejs")
app.get("/user", (req,res) =>{
    res.render("Hello")
})
app.listen(3000)
