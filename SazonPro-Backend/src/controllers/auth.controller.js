import { registerUser, loginUser } from "../services/auth.service.js";
import { existsUser } from "../services/user.service.js";
import { handdleHttpError, HttpError } from "../utils/error.handdle.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const existUser = await existsUser(email);
        if (existUser) throw new HttpError(400, "User already exists")

        const response = await registerUser(name, email, password);
        res.status(201).send(response);
    } catch (e) {
        console.log("error" + e)
        handdleHttpError(res, e.message, e)
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email + password)
        const existUser = await existsUser(email);

        if (!existUser) throw new HttpError(404, "User not found");

        const response = await loginUser(existUser, password);
        res.send(response)
    } catch (e) {
        console.log('este' + e)
        handdleHttpError(res, e.message, e)
    }
}