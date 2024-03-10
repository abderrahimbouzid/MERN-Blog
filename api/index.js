import Express, { response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import UserRoote from './routes/user.route.js'
import AuthRoote from './routes/auth.route.js'

dotenv.config()
mongoose.connect(process.env.MONGO)
.then(()=>{
console.log("Database is connected")
}).catch((err)=>{
    console.log(`this is the err ${err}`)
})

const app = Express()
app.use(Express.json())

app.use('/api/user',UserRoote)
app.use('/api/auth',AuthRoote)

app.use((err,req,res,next)=>{
const statusCode = err.statusCode || 500
const message = err.message || 'Internal Server Error'
res.status(statusCode).json({
    Success: false,
    statusCode,
    message

})
})

app.listen(3000,()=>{
    console.log("listening to port 3000!!")
})