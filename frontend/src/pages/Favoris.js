import { Box, Container, Grid, Typography } from '@material-ui/core'
import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addToFavorite } from '../actions/favoriteAction'
import ProductCard from '../components/Cards/ProductCard'

function Favoris(props) {
    const favorites = useSelector(state=>state.favorites)
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();


 useEffect(() => { 
    if(!userInfo){
        props.history.push("/connexion");
      }
       
  }, [userInfo]);

    const handleFavorite = (productItem) => {
        dispatch(
           addToFavorite(productItem)
          
        )    
      }
    


    function displayFavoris() {
        if(favorites.favoritesProduct.length > 0){
             return(
                    favorites.favoritesProduct.map((item,index)=>(
                        <Grid key={index} item lg={3} md={4} xs={6} >
                             <ProductCard
                                  item={item} 
                                  favoritesProduct={favorites.favoritesProduct}  
                                  toggleFavorite={handleFavorite}  
                             
                             />
                       </Grid>
                    )) 
               )
        }else{
            return(
                <Grid item  xs={12} >
                        <Typography  variant="h3" component="h3" p={5} align="center">
                            Votre liste de favoris est vide!!!
                        </Typography>
                </Grid>
            )
        }
    }

    return (
        <Box
            mt={2}
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3
            }}
        >
       
        <Container maxWidth={false} >
        <Typography mt={2}  variant="h4" component="h4" >  Favoris  </Typography>
                <Grid  container >
                        {displayFavoris()}
                </Grid>
        </Container>
       </Box>
    )
}

export default Favoris
