import { User } from '../models/user.model.js'
import { encryptPass, comparePass } from '../utils/encrypt.handdle.js';

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
        console.log(isCorrect)

        if(!isCorrect) return "Password incorrect";
        return existsUser;
    }catch(e){
        console.log("error" + e)
    }
}