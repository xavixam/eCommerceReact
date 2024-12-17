import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductsContext/ProductsState";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Footer/>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
