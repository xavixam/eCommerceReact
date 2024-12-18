import React, { useContext, useEffect } from "react";
import { UsersContext } from "../../context/UsersContext/UsersState";
import { Card } from "antd";

const Profile = () => {
  const { getUserInfo, user } = useContext(UsersContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <Card
        title={user.name}
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>{user.email}</p>
      </Card>
    </div>
  );
};

export default Profile;
