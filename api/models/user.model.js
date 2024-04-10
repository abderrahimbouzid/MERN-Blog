import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
    
    },
    password:{
        type: String,
        require: true,
        
    },
    profilePicture:{
        type: String,
        default: "https://i.imgur.com/X1pK30u.png"
    }
},
{timestamps: true}

);

const User = mongoose.model('User',userSchema)

export default User;