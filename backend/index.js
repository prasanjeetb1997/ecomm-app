const db = require("./config/mongoose")
const express = require('express')
const app = express()
const port = 4000
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use("/",require("./routes/main"))



app.get("/fortest",async (req,res)=>{
})








app.listen(port, () => {
  console.log(`Example App listening on port ${port}`)
})