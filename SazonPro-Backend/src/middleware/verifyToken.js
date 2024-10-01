import Jwt  from "jsonwebtoken";
import 'dotenv/config';

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).send({ message: 'A token is required for authentication' });
    }
    try {
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send({ message: 'Invalid Token' });
    }
     
}