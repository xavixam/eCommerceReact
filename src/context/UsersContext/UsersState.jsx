import React, { createContext, useReducer } from "react";
import axios from "axios";
import UsersReducer from "./UsersReducer";

const initialState = {
  tasks: [],
  taskById:{}
};

export const UsersContext = createContext(initialState);

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const createUser = async (user) =>{
   const res = await axios.post("http://localhost:3000/users/create",user)   
   return res.data;
  }

  return (
    <UsersContext.Provider
      value={{
        createUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};