import { createContext, useReducer } from "react";
import ProductsReducer from "./ProductsReducer";
import axios from "axios";

const initialState = {
  products: [],
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/products");
    
    //modificamos el estado de Characters
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};