import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FavoriteBorder, Favorite, SearchOutlined, ShoppingCartOutlined, AddShoppingCart } from '@material-ui/icons';

const InfoCard = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const ContainerDetail = styled.p`
    width: 80%;
    height: 10%;
    position: absolute;
    align-items: center;
    justify-content: center;
    text-align: center;
    color:white;
    background-color:#882b2d;
    display: flex;
    padding: 5px;
    z-index: 2;
    font-weight: bold;
    font-size:14px;
    top:85%;
    left:0;
    //background: linear-gradient(90deg, #FFF 0%, #FFF 100%);
    //box-shadow: 0 20px 20px rgba(10, 10, 10, 0.2);
    @media only screen and (max-width:768px){
           font-size: 12px;
           top:79%;
           height: 20%;
           
        }
`;

const ContainerCard = styled.div`
    flex: 1;
    margin:5px;
    min-width:95%;
    height: 95%;
    display: flex;
    background-color: #f5fbfd;
    align-items: center;
    justify-content: center;
    position: relative;
    

    &:hover ${InfoCard}{
        opacity: 1;
    }
`;

const CircleCard = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const ImageCard = styled.img`
    width: 75%;
    height: 75%;
    z-index: 2;
    object-fit: cover;
    box-shadow: 15px 20px 20px rgba(10, 10, 10, 0.2);
`;


const Icon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 background-color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 margin:10px;
 transition: all 0.5s ease;
 &:hover{
     background-color:#e9f5f5;
     transform:scale(1.1)
 }


`;




function ProductCard({item,toggleFavorite,favoritesProduct,addToCart}) {

    function displayFavoriteImage(){
        let heart =  <FavoriteBorder onClick={()=> toggleFavorite(item)}/>
        if( favoritesProduct.findIndex(product => product._id === item._id) !== -1 ){
            heart =  <Favorite  color="secondary" onClick={()=> toggleFavorite(item)}/>
         }
         return (
            <Icon>
                    {heart}
            </Icon>
         )
       }
  


    return (
       <ContainerCard>
          
           <ImageCard src={require(`../../images/articles/${item.image}`).default}   alt={item.titre}/>
           <InfoCard>
               <Icon>
                    <AddShoppingCart  onClick={()=>addToCart(item._id,item.color,item.size)} />
               </Icon>
               <Icon>
                    <Link to={`/produit/${item._id}`}>
                        <SearchOutlined/>
                    </Link>
               </Icon>
              {displayFavoriteImage()}
           </InfoCard>
           <ContainerDetail> {item.title} - {item.price} Fcfa </ContainerDetail>
       </ContainerCard>
    )
}

export default ProductCard
