import { Router } from "express";
import {readdirSync} from "fs";
import path from "path";

const __filname = new URL(import.meta.url).pathname;
const PATH_ROUTE = path.dirname(__filname);
const router = Router();

const cleanFileName = (fileName) => {
    const name = fileName.split(".")[0];
    return name;
}

readdirSync(PATH_ROUTE).filter((file) => {
    const cleanName = cleanFileName(file);
    if(cleanName !== "index") {
        import(`./${cleanName}.route.js`).then((module)=>{
            router.use(`/${cleanName}`, module.default);
        }).catch((err) => {
            console.log(err);
        })
    }

})

export{
    router
}