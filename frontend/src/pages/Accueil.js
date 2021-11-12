import React,{useEffect,useState} from 'react'
import { Box, Container, Grid } from '@material-ui/core';
import Slide from '../components/Slide';
import ProductCard from '../components/Cards/ProductCard';
import { categories, produitsTab } from '../components/data/data';
import CategorieItem from '../components/Cards/CategorieItem';
import axios from "axios";
import { addToFavorite } from '../actions/favoriteAction';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';


const Accueil = () => {

      const [products, setProducts] = useState([]);
      const dispatch = useDispatch();
      const favorites = useSelector(state=>state.favorites)

      useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get("http://localhost:5000/api/products");
              setProducts(res.data);
          } catch (err) {
            console.log(err)
          }
        };
        getProducts();
        console.log("favoris",favorites)
      }, []);

     
      const handleFavorite = (productItem) => {
        dispatch(
           addToFavorite(productItem)
        )    
      }

      const handleAddToCart = (id,color,size) => {
        dispatch(
           addToCart(id,color,size)
        )    
      }


    return (
        <>
        <Slide/>
        <Box
         mt={2}
         sx={{
             backgroundColor: 'background.default',
             minHeight: '100%',
             py: 3
           }}
        >
          <Container maxWidth={false}>
              <Grid container  spacing={2} >
                       {/**Catégories */}
                       {
                           categories.map((item,index) => (
                            <Grid key={index}  item lg={4} md={4} xs={4} >
                                   <CategorieItem item={item}   />
                            </Grid>
                           ))
                       }
                     
              </Grid>
               {/**Produits */}
              <Grid container>

                    {products.slice(0,12).map((item,index) => 
                        (
                        <Grid   key={index}  item lg={3} md={4} xs={6} >
                                <ProductCard 
                                  item={item} 
                                  favoritesProduct={favorites.favoritesProduct}  
                                  toggleFavorite={handleFavorite} 
                                  addToCart={handleAddToCart}
                                />
                        </Grid>
                         )
                       )
                     } 
              </Grid>
          </Container>
        </Box>
        </>
    )
}

export default Accueil
