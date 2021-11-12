import Axios from "axios";
import {
  USER_SIGNIN_REQUEST, 
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL, 
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, 
  USER_REGISTER_FAIL, 
  USER_LOGOUT, 
  USER_UPDATE_REQUEST, 
  USER_UPDATE_SUCCESS, 
  USER_UPDATE_FAIL
} from "../constants/userConstants";
import { publiqueRequest } from "../requestMethods";

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await publiqueRequest.post("/auth/login",{ email, password })
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
  }
  
  const register = (username, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { username, email, password } });
    try {
      const { data } = await publiqueRequest.post("/auth/register", { username, email, password });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    }
  }
  
  const logout = () => (dispatch) => {
    //localStorage.removeItem("persist:root")
    dispatch({ type: USER_LOGOUT })

  }



  export { signin, register, logout };