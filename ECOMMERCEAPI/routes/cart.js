const Cart = require('../models/Cart');
const { verifierToken, verifierTokenAndAuthorisation, verifierTokenAndAdmin } = require('./verifierToken');

const router = require('express').Router();

 
//Créer un panier
router.post('/', verifierToken, async (req,res) => {
    const newCart = new Cart(req.body);

    try {
        const saveCart = await newCart.save();
        res.status(200).json(saveCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

//mettre à jour un panier
router.put('/:id', verifierTokenAndAuthorisation, async (req,res)=>{
    
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true}
        
      );
      res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error)
    }
});


//supprimer
router.delete('/:id', verifierTokenAndAuthorisation, async (req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Supprimé avec succès");
    } catch (error) {
        res.status(500).json(error)
    }
});

//Obtenir le panier d'un utilisateur
router.get('/find/:userId',verifierTokenAndAuthorisation, async (req,res)=>{
    try {
       const cart = await Cart.findOne({
           userId:req.params.userId
       })
             res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error)
    }
});

//Obtenir tous 
router.get('/',verifierTokenAndAdmin, async (req,res)=>{
   try {
       const carts = await Cart.find();
       res.status(200).json(carts);
   } catch (error) {
    res.status(500).json(error)
   }
});



module.exports = router