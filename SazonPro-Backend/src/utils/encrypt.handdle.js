import bcrypt from 'bcryptjs';

export const encryptPass = async(password)=>{
    const hash = await bcrypt.hash(password, 10);
    return hash;
}


export const comparePass = async(password, hash)=>{
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
}