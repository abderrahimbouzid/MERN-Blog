import Express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.MONGO)
.then(()=>{
console.log("Database is connected")
}).catch((err)=>{
    console.log(`this is the err ${err}`)
})

const app = Express()

app.listen(3000,()=>{
    console.log("listening to port 3000!!")
})