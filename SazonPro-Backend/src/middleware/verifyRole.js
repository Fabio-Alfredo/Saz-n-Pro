const verifyRole= (requiredRole) => {
    return async (req, res, next)=>{
        try{
            const {roles} = req.user;
            
            if(!roles.includes(requiredRole)){
                return res.status(403).send({message: "You don't have permission to access this resource"});
            }
            next();

        }catch(e){
            return res.status(500).send({message: "Internal server error"});
        }
    }
}