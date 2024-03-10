import  Express  from "express";
import  {Signup}  from "../controllers/auth.controller.js";

const routeSignUp = Express.Router()

routeSignUp.post('/signup',Signup)


export default routeSignUp;

   