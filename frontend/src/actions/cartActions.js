import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "../constants/cartConstants";
import axios from "axios";


export const addToCart = (id,color,size) => async (dispacth,getState) => { 
 
    try {
      const res = await axios.get("http://localhost:5000/api/products/find/" + id);
            dispacth({
                type: ADD_TO_CART,
                payload:{
                    product:res.data,
                    id,
                    color,
                    size
                } 
            });
     } catch (error) {
        console.log(error)
    }

};



export const removeItem = (id) => async (dispacth) =>  {
  try {
          dispacth({
              type: REMOVE_FROM_CART,
              payload:{
                  id,
              } 
          })
   } catch (error) {
      console.log(error)
  }
};

export const substractQuantity = (id) => async (dispacth) =>  {

  dispacth({
    type: SUB_QUANTITY,
    payload:{
      id
    }
  })
 
};

export const addQuantity = (id) => async (dispacth) => {
  dispacth({
    type: ADD_QUANTITY,
    payload:{
      id
    }
 
  })
 
};

