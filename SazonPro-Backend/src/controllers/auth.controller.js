import { registerUser, loginUser } from "../services/auth.service.js";


export const registerController = async (req, res) => {
    try{
        const response = await registerUser(req, res);
        res.send(response);
    }catch(e){
        console.log("error"+e)
    }
}

export const loginController = async(req, res)=>{
    try{
        const response = await loginUser(req, res);
        res.send(response)
    }catch(e){
        console.log("error"+e)
    }
}