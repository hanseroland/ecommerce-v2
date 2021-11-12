import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cartReducer';
import favoriteReducer from './favoriteReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { userRegisterReducer, userSigninReducer } from './userReducer';


const rootReducer = combineReducers({
    panier: cartReducer,
    favorites: favoriteReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
});

const persistConfig = {
    key: 'root',
    storage,
}



const persistedReducer = persistReducer(persistConfig, rootReducer)


//const addedItems = Cookie.get("addedItems") || [];
//const initialState = {panier:{addedItems}};




const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))
export const persistor =  persistStore(store) 



/*import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartRedux';

export default configureStore({
    reducer:{
        cart:cartReducer,
    }
})*/