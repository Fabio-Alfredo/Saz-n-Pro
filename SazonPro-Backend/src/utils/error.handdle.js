
export const handdleHttpError=(res, err, errorRaw)=>{
    console.log(errorRaw)
    res.status(errorRaw.status || 500)
    res.send({error:err} || {error:"Internal Server Error"})

}

export class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
