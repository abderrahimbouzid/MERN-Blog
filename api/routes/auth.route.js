import  Express  from "express";
import  {Signup , Signin}  from "../controllers/auth.controller.js";

const router = Express.Router()

router.post('/signup',Signup)
router.post('/signin',Signin)


export default router;

   