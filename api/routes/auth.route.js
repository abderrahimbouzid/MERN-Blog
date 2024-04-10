import  Express  from "express";
import  {Signup , Signin, Google}  from "../controllers/auth.controller.js";

const router = Express.Router()

router.post('/signup',Signup);
router.post('/signin',Signin);
router.post('/google',Google);

export default router;

   