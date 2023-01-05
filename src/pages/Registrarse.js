import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./Firebase";

import "../Styles/Registrer.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/App");
  }, [user, loading]);
  return (
    <div className="body">
        <div class="container"></div>
        <div class="topnav" id="myTopnav">
          <a href="/" class="active">Uber</a>
        </div>
      
      <div className="register">
        <div className="register__container">
          <label className="label">
            Rellene Los Siguientes Campos Por Favor
          </label>
          <input
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre Completo"
          />
          <input
            type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
          />
          <input
            type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <button className="register__btn" onClick={register}>
            Registrarse
          </button>
          <button
            className="register__btn register__google"
            onClick={signInWithGoogle}
          >
            Registrarse con Google
          </button>
          <div>
            ¿Ya tienes una cuenta? <Link to="/Login">Login</Link> ahora.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;