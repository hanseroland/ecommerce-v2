import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data/data";
import ProductCard from "./ProductCard";
import axios from "axios";
import { TreeView } from "@material-ui/lab";
import { Grid,Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../actions/favoriteAction";
import { addToCart } from "../../actions/cartActions";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, trie }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const favorites = useSelector(state=>state.favorites)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
          ? `http://localhost:5000/api/products?categorie=${cat}`
          : "http://localhost:5000/api/products"
          
          );
          setProducts(res.data);
        
      } catch (err) {
        console.log(err)
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (trie === "recent") {
      setFilteredProducts((prev) =>  
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (TreeView === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.prix - b.prix)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.prix - a.prix)
      );
    }
  }, [trie]);


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
 
    <Grid container>
      { 
        cat
        ? filteredProducts.map((item,index) => (
          <Grid   item lg={3} md={4} xs={6} key={index}>
              <ProductCard 
                item={item}  
                favoritesProduct={favorites.favoritesProduct}   
                toggleFavorite={handleFavorite} 
                addToCart={handleAddToCart} 
              />
          </Grid>
          ))
        
        :products.slice(0,8).map((item,index) => (
            <Grid   item lg={3} md={4} xs={6} key={index}>
                <ProductCard 
                  item={item} 
                  favoritesProduct={favorites.favoritesProduct}  
                  toggleFavorite={handleFavorite}  
                  addToCart={handleAddToCart} 
                />
            </Grid>
          ))
      }
      </Grid>
     

  );
};

export default Products;