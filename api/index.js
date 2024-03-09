import Express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import UserRoote from './routes/user.route.js'

dotenv.config()
mongoose.connect(process.env.MONGO)
.then(()=>{
console.log("Database is connected")
}).catch((err)=>{
    console.log(`this is the err ${err}`)
})

const app = Express()

app.use('/api/user',UserRoote)

app.listen(3000,()=>{
    console.log("listening to port 3000!!")
})