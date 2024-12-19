import { createContext, useReducer } from "react";
import ProductsReducer from "./ProductsReducer";
import axios from "axios";

const initialState = {
  products: [],
  cart: [],
};

const API_URL = "http://localhost:3000/products"

export const ProductsContext = createContext(initialState);

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL);
    
    //modificamos el estado de Characters
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const clearCart =()=>{
    dispatch({
      type:"CLEAR_CART"
    })
} 

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};