import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import OrderService from "../../services/OrderService";
import { Button, Empty, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./Cart.scss";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);

  if (cart.length == 0) {
    return <Empty description="The cart is empty" />;
  }

  return (
    <>
      <div className="cart">
        <div className="background">
          <h2>Ordered products:</h2>
          <div className="row">
            {cart.map((product) => {
              return (
                <Card
                  title={product.name}
                  bordered={false}
                  style={{
                    width: 300,
                  }}
                  key={product.id}
                  className="card"
                >
                  <p>{product.price} €</p>
                </Card>
              );
            })}
          </div>
          <div className="buttons">
            <Button onClick={clearCart}>
              Clear cart <DeleteOutlined />
            </Button>
            <Button
              onClick={async () => {
                await OrderService.createOrder(cart);
                clearCart();
              }}
            >
              Create order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
