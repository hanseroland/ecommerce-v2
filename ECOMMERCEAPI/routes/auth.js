const router = require('express').Router();
const User = require('../models/Users'); //On recupère notre modèle d'utilisateur mongodb
const CryptoJs = require('crypto-js') //Pour crypter le mot de passe
const jwt = require('jsonwebtoken')

//register, création du compte 
router.post("/register", async (req,res) => {
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password, 
            process.env.PASS_SEC
        ).toString()    //On crypte le mot de passe
    });
    try {
        const saveUser =  await newUser.save();//on enrégistre dans la base de donnée
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(500).json(error)
    }
    
} );

//login, connexion
router.post("/login", async (req,res)=> {
    try {
        const user = await User.findOne({email:req.body.email});//on recherche l'utilisateur par email (unique)
        !user && res.status(401).json("Erreur d'utilisateur")//Si l'email n'est pas retrouvé


        const hashedPassword = CryptoJs.AES.decrypt( 
            user.password,
            process.env.PASS_SEC
        );//On crypte le mot de passe
        const OriginPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

        OriginPassword !== req.body.password && 
        res.status(401).json("Erreur de mot de passe"); //si le mot de passe ne correspond pas

        const accessToken = jwt.sign(
            {
                id:user._id,
                isAdmin: user.isAdmin,
            },
           process.env.JWT_SEC,
           {expiresIn:"3d"}//expiration du token dans 3jours
        );

        
        const {password,...others} = user._doc;

        res.status(200).json({...others,accessToken});
         
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router; 