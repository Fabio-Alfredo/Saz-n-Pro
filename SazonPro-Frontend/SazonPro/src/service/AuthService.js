import axios from "axios";

const baseUrl = "http://localhost:3000/auth/"

export const Login = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}login`, data)
    return res.data
  } catch (e) {
    console.log(e.response)
    throw e.response.data
  }
}

export const Register = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}register`, data)
    return res.data
  } catch (e) {
    console.log("el error" + e.response.data)
    throw e.response.data
  }
}
