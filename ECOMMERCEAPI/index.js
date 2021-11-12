/***Nous allons configurer le server node Js ici, son démarrage plus précisement */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const cors = require('cors');
dotenv.config();


mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('DBconnection succès!'))//message à afficher si mongoDB fonctionne normalement
.catch((err)=>{
    console.log(err);
});
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use("/api/auth",authRoute);//on charge les routes d'authentification
app.use("/api/users",userRoute);// on charge les routes pour la gestion d'utilisateur
app.use("/api/products",productRoute);// on charge les routes pour la gestion des produits
app.use("/api/carts",cartRoute);// on charge les routes pour la gestion des paniers
app.use("/api/orders",orderRoute);// on charge les routes pour gestion des commandes

 
app.listen(process.env.PORT || 5000, ()=>{
    console.log('Le backend server est en marche');// Message à afficher pour spécifier que notre serveur est bien en route
})
