import { User } from '../models/user.model.js'
import { encryptPass, comparePass } from '../utils/encrypt.handdle.js';
import { generateToken } from '../utils/jwt.handdle.js';
import { HttpError } from '../utils/error.handdle.js';

export const registerUser = async (name, email, password) => {

    const pass = await encryptPass(password);
    const newUser = User.create({ name: name, email: email, password: pass });
    return newUser;

}

export const loginUser = async (existsUser, password) => {

    const isCorrect = await comparePass(password, existsUser.password);
    if (!isCorrect) throw new HttpError(404, "Credentials error");


    const token = generateToken({ id: existsUser.id, email: existsUser.email });

    return token;
}
