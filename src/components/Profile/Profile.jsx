import React, { useContext, useEffect } from "react";
import { UsersContext } from "../../context/UsersContext/UsersState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card } from "antd";
import "./Profile.scss";

const Profile = () => {
  const { getUserInfo, user } = useContext(UsersContext);
  const { cart } = useContext(ProductsContext);

  useEffect(() => {
    getUserInfo();
  }, []);
if(!user)return <p>cargando...</p>
  return (
    <div className="info">
      <div>
        <Card
          className="card"
          title={user.name}
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <p>{user.email}</p>
        </Card>
      </div>
      <div>
 {user.Orders.map((order) => {
          console.log(order);
          return order.Products.map((product) => {
            return (
              <Card
                title={product.name}
                bordered={false}
                style={{
                  width: 300,
                }}
                key={product.id}
              >
                <p>{product.price} €</p>
              </Card>
            );
          });
        })} 
      </div>
    </div>
  );
};

export default Profile;
