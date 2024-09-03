import mongoose from 'mongoose';
import 'dotenv/config';

export const dbConecction = async () => {
    const  MONGO_URI  = process.env.DB_URI;
    if(!MONGO_URI){
        throw new Error("No se ha encontrado la URI de la base de datos");
    }
    try{
        await mongoose.connect(MONGO_URI)
        console.log("Conexión a la base de datos exitosa");
    }catch(e){
        console.log("Error al conectar a la base de datos", e);
    }

}
