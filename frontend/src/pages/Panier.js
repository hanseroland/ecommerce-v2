import React,{useState,useEffect} from 'react';
import { Add, Remove, ShoppingCart } from "@material-ui/icons";
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import { Box,Container,Grid,makeStyles } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { addQuantity, removeItem, substractQuantity } from '../actions/cartActions';
import { 
  BtnRemove,
  Button,
  Details,
  Image,
  Info,
  PriceDetail, 
  Product, 
  ProductAmount, 
  ProductAmountContainer, 
  ProductColor, 
  ProductDetail, 
  ProductId, 
  ProductName, 
  ProductPrice, 
  ProductSize, 
  Summary, 
  SummaryItem, 
  SummaryItemPrice, 
  SummaryItemText, 
  SummaryTitle, 
  Title, 
  Top, 
  TopButton, 
  TopText, 
  TopTexts 
} from './PanierElements';
import GradientBtn from '../components/GradientBtn';


const useStyles = makeStyles((theme) => ({
   
  buttonStyle: {
    cursor:'pointer'
}
}));


const KEY = process.env.REACT_APP_STRIPE

function Panier(props) {


 const cart = useSelector(state=>state.panier);
 const userSignin = useSelector(state => state.userSignin);
 const {userInfo} = userSignin;
 const dispatch = useDispatch();
 const classes = useStyles();
 const history = useHistory();
 const [stripeToken, setStripeToken] = useState(null);
 const redirect = props.location.search?props.location.search.split("=")[1]:'/';

 console.log(redirect)


  const verifyIsLogin = () => {
    if(!userInfo){
        props.history.push("/connexion");
    }
  }


 const onToken = (token) => {
    setStripeToken(token)
 }

//console.log(stripeToken)

 const handleClick = (id) => {
  dispatch(
    removeItem(id)
  )
     
}

const handleAddQuantity = (id) => {
  dispatch(
    addQuantity(id)
  )
}

const handleSubtractQuantity = (id) => {
  dispatch(
    substractQuantity(id)
    
  )
}

const checkoutHandler = () => {
  props.history.push("/connexion?redirect=livraison");
} 

  function getProduitCount() {
    let itemCount = cart.addedItems.reduce((a,b) => a + (b.quantityItem || 0), 0);
    return itemCount;
  }


function renderCartItems (){

  if(cart.addedItems.length > 0){
     return (
              <Info>
                {cart.addedItems.map((item,index)=>(

                       <Product key={index} >
                          <ProductDetail>
                             <Image src={require(`../images/articles/${item.image}`).default} />
                              <Details>
                                <ProductName>
                                    <b>Produit:</b> {item.title}
                                </ProductName>
                                <ProductId>
                                        <b>ID:</b> {item._id}
                                </ProductId>
                                <ProductColor color={item.color} />
                                <ProductSize>
                                        <b>Taille:</b> {item.size}
                                </ProductSize>
                                </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                   
                                    <Remove  className={classes.buttonStyle}  onClick={()=>handleSubtractQuantity(item._id)} />
                                    <ProductAmount>{item.quantityItem} </ProductAmount>
                                    <Add className={classes.buttonStyle}   onClick={()=>handleAddQuantity(item._id)}  />
                                    
                                    </ProductAmountContainer>
                                    <ProductPrice>
                                           {item.price*item.quantityItem}
                                    </ProductPrice>
                                    <BtnRemove   onClick={()=>handleClick(item._id) } >
                                       retirer
                                    </BtnRemove>
                                </PriceDetail>
                                </Product>
                            ))}
                      </Info>
     )
  }else{

    return (
      <h1>Votre panier est vide !!!!</h1>
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

        <Container   maxWidth={false}>
        <Title>VOTRE PANIER</Title>
             <Top>
                   <TopButton onClick={()=> history.push("/")}>Continuer vos achats</TopButton>
                  <TopTexts>
                  <TopText> {getProduitCount()} articles</TopText>
                  </TopTexts>
                <TopButton type="filled">Acheter maintenant</TopButton>
             </Top>
                <Grid container spacing={1} > 
                    <Grid item lg={7} xs={12}>
                       <Box p={2}>
                          {renderCartItems()}
                        </Box >
                    </Grid>
                    <Grid item lg={5} xs={12}>
                   <Box p={5}  >
                  
                    <Summary>
                                <SummaryTitle>Résumé de la commande</SummaryTitle>
                                <SummaryItem>
                                    <SummaryItemText>Sous total</SummaryItemText>
                                    <SummaryItemPrice>{cart.total} Fcfa</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>TVA</SummaryItemText>
                                    <SummaryItemPrice>0.12%</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>Réduction</SummaryItemText>
                                    <SummaryItemPrice>-0.12%</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem type="total">
                                    <SummaryItemText>Total</SummaryItemText>
                                    <SummaryItemPrice>{cart.total} Fcfa </SummaryItemPrice>
                                </SummaryItem>
                            
                                    <Box  display="flex" justifyContent="space-between" >
                                       <StripeCheckout
                                            name="HRP SHOP"
                                            image={<ShoppingCart/>}
                                            billingAddress
                                            shippingAddress
                                            description={`Votre total est ${cart.total} Fcfa`}
                                            amount={cart.total * 100}
                                            token={onToken}
                                            stripeKey={KEY}
                                        >
                                        <Button 
                                          onClick={()=>verifyIsLogin()} 
                                          disabled={cart.addedItems.length===0}
                                          > 
                                          Carte Visa 
                                        </Button>
                                        </StripeCheckout>
                                       <GradientBtn  
                                          onclick={checkoutHandler}
                                          disabled={cart.addedItems.length===0}
                                          nom="Payement mobile "                                        
                                      /> 
                                         
                                      
                                    </Box>
                                   
                                 
                         </Summary>
                         
                    </Box>
                    </Grid>
                </Grid>
        </Container>
        </Box>
     
    )
}
  
export default Panier
 