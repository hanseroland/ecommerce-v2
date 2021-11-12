const Product = require('../models/Products');
const { verifierToken, verifierTokenAndAuthorisation, verifierTokenAndAdmin } = require('./verifierToken');

const router = require('express').Router();


//Créer un produit
router.post('/', verifierTokenAndAdmin, async (req,res) => {
    const newProduct = new Product(req.body);

    try {
        const saveProduct = await newProduct.save(); 
        res.status(200).json(saveProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

//mettre à jour un produit
router.put('/:id', verifierTokenAndAdmin, async (req,res)=>{
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true}
        
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error)
    }
});


//supprimer un produit
router.delete('/:id', verifierTokenAndAdmin, async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Produit supprimé avec succès");
    } catch (error) {
        res.status(500).json(error)
    }
});

//Obtenir un produit
router.get('/find/:id', async (req,res)=>{
    try {
       const product = await Product.findById(req.params.id)
             res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error)
    }
});

//Obtenir tous les produits
router.get('/', async (req,res)=>{
    const qNew = req.query.new; 
    const qCategorie = req.query.categorie; 
   // console.log(qCategorie)
    try {
      
       let products;
       if(qNew){
           products = await Product.find().sort({createdAt:-1}).limit(5);
       }else if(qCategorie){
           products = await Product.find({
               categories:{
                   $in:[qCategorie],
               },
           });
       }else{
        products = await Product.find();
       }
      
       res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error)
    }
});


/**









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






 */

module.exports = router
