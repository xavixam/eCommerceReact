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
  if (!user) return <p>cargando...</p>;
  return (
    <>
      <div className="all">
        <div className="background">
          <div className="info">
            <h2 id="logged-user">Logged user:</h2>
            <div>
              <Card
                className="cards"
                title={user.name}
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                <p>{user.email}</p>
              </Card>
            </div>
          </div>
          <div>
            <h2>Orders:</h2>
            <div className="orders">
              {user.Orders.map((order) => {
                return order.Products.map((product) => {
                  return (
                    <Card
                      title={product.name}
                      bordered={false}
                      style={{
                        width: 300,
                      }}
                      key={product.id}
                      className="cards"
                    >
                      <p>{product.price} €</p>
                    </Card>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
