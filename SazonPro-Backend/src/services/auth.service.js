import { User } from '../models/user.model.js'
import { encryptPass, comparePass } from '../utils/encrypt.handdle.js';

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const checkUser = await User.findOne({email: email});

        if(checkUser)return "User already exists";
        
        const pass = await encryptPass(password);

        const newUser = User.create({ name: name, email: email, password: pass });
        return newUser;

    } catch (e) {
        console.log("error" + e)
    }
}

export const loginUser = async(req, res)=>{
    try{
        const { email, password } = req.body;
        const existUser = await User.findOne({email:email});

        if(!existUser) return "User not found";

        const isCorrect = await comparePass(password, existUser.password);
        console.log(isCorrect)

        if(!isCorrect) return "Password incorrect";
        return existUser;
    }catch(e){
        console.log("error" + e)
    }
}