const jwt = require("jsonwebtoken");


const verifierToken = (req,res,next) => {
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SEC,(error,user)=>{
            if(error) res.status(403).json("Token invalide!")
            req.user = user;
            next();
           
        })
    }else{
        res.status(401).json("Vous n'êtes pas authentifié!")
    }
};


const verifierTokenAndAuthorisation = (req,res,next) => {
    verifierToken(req,res,()=>{
       if(req.user.id === req.params.id || req.user.isAdmin){
         next();
       }else{
            res.status(403).json("Vous n'êtes pas autorisé à utilser cette opération");
       }
    })
};


const verifierTokenAndAdmin = (req,res,next) => {
    verifierToken(req,res,()=>{
       if( req.user.isAdmin){
         next();
       }else{
            res.status(403).json("Vous n'êtes pas autorisé à utilser cette opération");
       }
    })
};

module.exports = {
    verifierToken,
    verifierTokenAndAuthorisation,
    verifierTokenAndAdmin 
}