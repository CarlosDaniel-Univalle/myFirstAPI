const express = require('express')
const mongoose = require("mongoose")
require("dotenv").config()
const userRoutes = require ("./routes/user")

const app = express()
const port = 3000

app.use(express.json())
app.use('/api', userRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(
  process.env.MONGODB
).then (()=> console.log("Coneccion con la DB exitosa"))
.catch((error)=>console.log(error))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})