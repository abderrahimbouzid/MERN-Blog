import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { handleError } from "../utils/error.js"
import jwt from 'jsonwebtoken'

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

export const Signin = async (req,res,next) =>{
    const {email,password} = req.body
    if(!email || !password || email =='' || password == ''){
        next(handleError(400,'all fields are required'))
    }
    
    try {
        const validUser = await User.findOne({email})
        if(!validUser){
            return next(handleError(404,'User not found'))
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password)
         if(!validPassword){
           return next(handleError(404,"invalide password"))
         }

        const token = jwt.sign({id: validUser._id,},process.env.JWT_SECRET)

        const {password: pass,...rest} = validUser._doc


      res.status(200).cookie('acessToken',token,{
        httpOnly:true,
      }).json(rest)       
    } catch (error) {
        next(error)
    }
}




