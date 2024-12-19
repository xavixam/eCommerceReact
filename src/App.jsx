import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductsContext/ProductsState";
import { UsersProvider } from "./context/UsersContext/UsersState"; // Asegúrate de la ruta correcta

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
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
          </UsersProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
