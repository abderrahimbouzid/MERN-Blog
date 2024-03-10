import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { handleError } from "../utils/error.js"

export const Signup = async (req,res,next)=>{
const {username,email,password} = req.body

if(!username | !email | !password | username == '' | email == '' | password == '' ){
   next(handleError(400,'all fields are required')) 
}

const hashedPassword = bcryptjs.hashSync(password,10)
 
const newUser = new User({
    username,
    email,
    password: hashedPassword,
})

try {
    
    await newUser.save();
    res.json({message:"Sign up sucessfully"})
} catch (error) {
    next(error)
}


}




