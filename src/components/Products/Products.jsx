import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Products.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "antd";

const Products = () => {
  const { products, getProducts, addCart } = useContext(ProductsContext);

  //se ejecutará al cargar la página
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-lg-4">
            <img
              className="rounded-circle"
              width="140"
              height="140"
              src={"./../src/assets/descarga.jpg"}
            />
            <div className="info">
              <h2 className="fw-normal">{product.name}</h2>
              <p>{product.price}€</p>
              <Button onClick={() => addCart(product)}>Add Cart</Button>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
