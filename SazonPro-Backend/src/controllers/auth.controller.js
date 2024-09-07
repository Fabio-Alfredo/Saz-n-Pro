import { registerUser, loginUser } from "../services/auth.service.js";
import { existsUser } from "../services/user.service.js";

export const registerController = async (req, res) => {
    try{
        const { name, email, password } = req.body
        const existUser = await existsUser(email);
        if(existUser) return res.status(400).send("User already exists");

        const response = await registerUser(name, email, password);
        res.status(201).send(response);
    }catch(e){
        console.log("error"+e)
    }
}

export const loginController = async(req, res)=>{
    try{
        const { email, password } = req.body;
        const existUser = await existsUser(email);
        
        if(!existUser) return res.send("User not found");

        const response = await loginUser(existUser, password);
        res.send(response)
    }catch(e){
        console.log("error"+e)
    }
}