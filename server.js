const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const userRoutes = require("./routes/users")
const roleRoutes = require("./routes/roles")

const app = express()

app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/testdb")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

app.use("/users", userRoutes)
app.use("/roles", roleRoutes)

app.listen(3000,()=>{
    console.log("Server running port 3000")
})