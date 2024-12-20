import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../context/UsersContext/UsersState";
import "./Register.scss";

const Register = () => {
  const initialValue = {
    name: "",
    password: "",
    email: "",
    role: "",
  };

  const [data, setData] = useState(initialValue);
  const context = useContext(UsersContext);
  const { createUser } = context || {};
  const { name, password, email, role } = data;
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.role]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data); //mostramos por consola la información del formulario(data)
    createUser(data);
    setData(initialValue); //limpiamos el formulario
    navigate("/"); // redireccionamos a home
  };

  return (
    <>
      <div className="form-background">
        <div className="form-container">
          <form id="form">
            <div id="form-div">
              <div class="form-group">
                <input
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  type="text"
                  placeholder="Inserta el nombre"
                  name="name"
                  value={name}
                  onChange={handleOnChange}
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  type="password"
                  placeholder="Inserta la contraseña"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  type="email"
                  placeholder="Inserta el email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  type="text"
                  placeholder="Inserta el rol"
                  name="role"
                  value={role}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div id="div-btn">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleSubmit}
              >
              Enviar
            </button>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
