import { User } from "../models/userModel.js";
import bcrypt from 'bcryptjs';

export const register = async(req, res) =>{
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message:"All fields are required"});
        }else if(password !== confirmPassword){
            return res.status(400).json({ message: "Password do not match" });
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message:"Username already exist"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const malePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femalePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;  
        await User.create({
            fullName, 
            username, 
            password:hashedPassword, 
            profilePhoto: gender == 'male' ? malePhoto : femalePhoto, 
            gender
        });
        return res.status(201).json({
            message: "Account created successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}