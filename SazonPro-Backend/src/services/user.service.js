import {User} from '../models/user.model.js';

export const existsUser = async(email)=>{
    try{
        const existUser = await User.findOne({email:email});
        return existUser;
    }catch(e){
        console.log("error" + e)
    }
}
