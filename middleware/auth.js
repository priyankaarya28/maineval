var jwt = require('jsonwebtoken');
 
const AuthMiddleware = (role)=>{
    return (req,res,next)=>{
        try{
            if (token){
                var decoded = jwt.verify(token, "shhhh")
                if(decoded) {
                    //token is valid
                    console.log(decoded.role)
                    if(role.includes(decoded.role)){
                        req.userId = decoded.userId;
                        req.role = decoded.role;
                        next()
                    }
                }else{
                    //token is not present
                    res.status(404).json({msg:"token is not found"})
                }
            }

        }catch(err){
         return res.status(500).json({msg:"something went wrong"})
        }
    }
}
module.exports = AuthMiddleware
