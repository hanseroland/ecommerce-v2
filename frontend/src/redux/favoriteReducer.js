import { TOGGLE_FAVORITE } from "../constants/favoriteConstants"

const initialState = {favoritesProduct:[]}


function favoriteReducer(state = initialState, action){
    let nextState
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const favoritesProductIndex = state.favoritesProduct.findIndex(item => item._id === action.payload.value._id)
            if(favoritesProductIndex !== -1){
              //suppression
                nextState ={ 
                    ...state,
                    favoritesProduct:state.favoritesProduct.filter((item,index) => index !== favoritesProductIndex)
                }
            }else{
                //ajouter
                nextState = {
                    ...state,
                    favoritesProduct:[...state.favoritesProduct,action.payload.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default favoriteReducer