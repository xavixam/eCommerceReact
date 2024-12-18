import React, { createContext, useReducer } from "react";
import axios from "axios";
import UsersReducer from "./UsersReducer";

const token = localStorage.getItem("token") || "";

const initialState = {
  token: token,
  user: null,
};

const API_URL = "http://localhost:3000/users";

export const UsersContext = createContext(initialState);

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const createUser = async (user) =>{
   const res = await axios.post(API_URL + "/create", user)   
   return res.data;
  }

  const login = async (user) => {
    const res = await axios.post(API_URL + "/login", user);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token",res.data.token);
    }
  };

  const getUserInfo = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(API_URL + "/getUserInfo",
      {
        headers: {
          authorization: token,
        },
      }
      );
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data,
      })
  };

  const logout = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.delete(API_URL + "/logout",  
    {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };

  return (
    <UsersContext.Provider
      value={{
        token:state.token,
        user: state.user,
        createUser,
        login,
        getUserInfo,
        logout
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};