import jwt from 'jsonwebtoken';
import 'dotenv/config';

const _JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (data)=>{
    const token = jwt.sign(
        data,
        _JWT_SECRET,
        {expiresIn: '1h'}
    )

    return data={token};
}

export const verifyToken = (token)=>{
    const decoded = jwt.verify(token, _JWT_SECRET)
    return decoded;
}