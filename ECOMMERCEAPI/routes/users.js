const User = require('../models/Users');
const { verifierToken, verifierTokenAndAuthorisation, verifierTokenAndAdmin } = require('./verifierToken');

const router = require('express').Router();

//Obtenir un utilisateur
router.get('/find/:id', verifierTokenAndAdmin, async (req,res)=>{
    try {
       const user = await User.findById(req.params.id)
       const {password,...others} = user._doc;

       res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error)
    }
});


//Obtenir tous les utilisateurs
router.get('/', verifierTokenAndAdmin, async (req,res)=>{
    const query = req.query.new; 
    try {
      
       const users = query 
       ? await User.find().sort({_id:-1}).limit(5)
       : await User.find()
       res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error)
    }
});




//Obtenir le total d'utilisateur par mois
router.get('/stats', verifierTokenAndAdmin, async (req,res)=>{
   const date = new Date();
   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

   try {
       const data = await User.aggregate([
           {$match: {createdAt:{$gte: lastYear}}},
           {
               $project:{
                   month:{$month:"$createdAt"},
               },
           },
           {
               $group:{
                   _id:"$month",
                   total: {$sum:1}
               }
           }
       ]);
       res.status(200).json(data);
   } catch (error) {
      res.status(500).json(error);
   }
});


//mettre à jour un utilisateur
router.put('/:id', verifierTokenAndAuthorisation, async (req,res)=>{
    if(req.body.password){
        req.body.password= CryptoJs.AES.encrypt(
            req.body.password, 
            process.env.PASS_SEC
        ).toString()    //On crypte le mot de passe
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true}
        
      );
      res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error)
    }
});


//supprimer un utilisateur
router.delete('/:id', verifierTokenAndAuthorisation, async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Utilisateur supprimé avec succès");
    } catch (error) {
        res.status(500).json(error)
    }
});



module.exports = router