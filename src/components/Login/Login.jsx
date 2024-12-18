import React from "react";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext/UsersState";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UsersContext);
  const navigate = useNavigate()

  const onFinish = (values) => {
    login(values)
    console.log("Success:", values);
    navigate("/")
  };

  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
