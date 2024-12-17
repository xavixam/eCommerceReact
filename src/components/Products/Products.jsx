import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductsContext/ProductsState";
import "./Products.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);

  //se ejecutará al cargar la página
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div class="row">
      {products.map((product) => {
        return (
          <div key={product.id} class="col-lg-4">
            <img
              class="rounded-circle"
              width="140"
              height="140"
              src={"./../src/assets/descarga.jpg"}
            />
            <div class="info">
              <h2 class="fw-normal">{product.name}</h2>
              <p>{product.price}€</p>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
