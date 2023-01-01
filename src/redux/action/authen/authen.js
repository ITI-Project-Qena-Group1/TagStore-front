import { authConstants } from "../../types";
import { axiosInstance } from "../../../network";

// new update signup action
export const signup = (userx) => async (dispatch) => {
  try {
    let res = await axiosInstance.post(`/auth/register`, userx);
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const signupSeller = (userx) => async (dispatch) => {
  try {
    let res = await axiosInstance.post(`/auth/register`, userx);
    console.log("res,", res);
    const { token, user } = res.data;
   
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = (userx) => async (dispatch) => {
  try {
    const res = await axiosInstance.post(`/auth/login`, {
      ...userx,
    });
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const isUserLoggedIn = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const signout = () => {
  return async (dispatch) => {

    localStorage.clear();
 
  };
};