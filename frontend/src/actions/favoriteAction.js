import { TOGGLE_FAVORITE } from "../constants/favoriteConstants";


export const addToFavorite = (product) => (dispatch) => {
    dispatch({
      type:TOGGLE_FAVORITE,
      payload:{
        value:product
      }
    })
  };