import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductsContext/ProductsState";
import { UsersProvider } from "./context/UsersContext/UsersState"; // Asegúrate de la ruta correcta
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <UsersProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
          </UsersProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
