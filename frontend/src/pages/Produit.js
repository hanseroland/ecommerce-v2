import {Grid,Box, colors, Container, Button, makeStyles, } from '@material-ui/core';
import { Add, Favorite, FavoriteBorder, Remove } from '@material-ui/icons';
import React, {useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { 
        AddContainer,
        AmountContainer,
        Desc,
        Amount,
        Filter,
        FilterColor,
        FilterContainer,
        FilterOption,
        FilterSize,
        FilterTitle,
        Image, 
        ImgContainer, 
        Price, 
        Title,
        ContainerTitle,
        Icon
} from './ProduitElement';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { addToFavorite } from '../actions/favoriteAction';
import { useSelector } from 'react-redux';
import { publiqueRequest } from '../requestMethods'; 



const useStyles = makeStyles((theme) => ({
   
      buttonStyle: {
        fontSize:12,
        backgroundColor:"#882b2d"
    }
  }));

function Produit(props) {


   const location = useLocation();
   const id = location.pathname.split("/")[2];
   const [product,setProduct] = useState({});
   const [color, setColor] = useState("");
   const [size,setSize] = useState("");
   const favorites = useSelector(state=>state.favorites)
   const dispatch = useDispatch()
   const classes = useStyles();

    console.log("location",props.location)

    useEffect(() => {
      const getProducts = async () => {
        try {
         // const res = await axios.get("http://localhost:5000/api/products/find/" + id);
         const res = await publiqueRequest.get("/products/find/" + id)
          setProduct(res.data);
        } catch (err) {
          console.log(err)
        }
      };
      getProducts();
    
    }, []);

  

   const handleClick = () => {
     dispatch(
        addToCart(id,color,size)
     )    
   }

   const handleFavorite = (productItem) => {
    dispatch(
       addToFavorite(productItem)
    )    
  }

   function displayFavoriteImage(){
    let heart =  <FavoriteBorder onClick={()=> handleFavorite(product)}/>
    if( favorites.favoritesProduct.findIndex(item => item._id === product._id) !== -1 ){
        heart =  <Favorite  color="secondary" onClick={()=> handleFavorite(product)}/>
     }
     return (
        <Icon>
               {heart}
        </Icon>
     )
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
            <Container maxWidth={false}>
                   <Grid container >
                        <Grid item  lg={6}  xs={6} >
                            <ImgContainer>
                                  <Image src={`../images/articles/${product.image}`}/>
                            </ImgContainer>  

                        </Grid>
                        <Grid item   lg={6} md={6} xs={6} >
                            <Title> {product.title} </Title>
                            <Desc>
                               {product.description}
                            </Desc>
                            {displayFavoriteImage()}
                            <Price> {product.price} Fcfa</Price>

                            <FilterContainer>
                            <Filter>
                                <FilterTitle>Couleur</FilterTitle>
                                {product.color?.map((c,index) => (
                                    <FilterColor color={c} key={index} onClick={() => setColor(c)} />
                                ))}                            
                            </Filter>
                            <Filter>
                                <FilterTitle>Taille</FilterTitle>
                                 <FilterSize  onChange={(e) => setSize(e.target.value)}  >
                                 {product.size?.map((s,index) => (
                                        <FilterOption key={index}>{s}</FilterOption>
                                    ))}
                                 </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                    
                            <Button 
                                 variant="contained"
                                 color="primary"  
                                 size="large"
                                 fullWidth
                                  onClick={handleClick}
                                  className={classes.buttonStyle}
                                   >
                                Ajouter au Panier
                            </Button>
                        </AddContainer>
                     </Grid>
                   </Grid>
            </Container>
        </Box>
    )
}

export default Produit
