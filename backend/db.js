const mongoose = require('mongoose')

const dbURI='mongodb://localhost:27017/brojict-1'

mongoose.connect(dbURI)

const db = mongoose.connection;

db.on('error',(err)=>{
    console.log("ERROR in Mongodb" + err)
})
db.on('connected',(err)=>{
    console.log("Mongodb IS CONNECTED ...")
})