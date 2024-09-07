import { User } from '../models/user.model.js'
import { encryptPass, comparePass } from '../utils/encrypt.handdle.js';
import { generateToken } from '../utils/jwt.handdle.js';

export const registerUser = async (name, email, password) => {
    try {        
        const pass = await encryptPass(password);

        const newUser = User.create({ name: name, email: email, password: pass });
        return newUser;

    } catch (e) {
        console.log("error" + e)
    }
}

export const loginUser = async(existsUser,password)=>{
    try{

        const isCorrect = await comparePass(password, existsUser.password);
        if(!isCorrect) return "Password incorrect";
    
        const token = generateToken({id:existsUser.id, email:existsUser.email});
        
        return token;
    }catch(e){
        console.log("error" + e)
    }
}