import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./Firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import "../Styles/Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
  <div className="body">    
      <div class="container"></div>
          <div class="topnav" id="myTopnav">
            <a href="/" class="active">Uber</a>
          </div>
      <div className="login">
        
        <div className="login__container">
          <label className="label">
                Rellene Los Siguientes Campos Por Favor
          </label>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <button
            className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Entrar
          </button>
          <button className="login__btn login__google" onClick={signInWithGoogle}>
            Entrar Con Google
          </button>
          <div>
            <Link to="/Reset">Olvidé la Contraseña</Link>
          </div>
          <div>
            ¿No tienes cuenta? <Link to="/Registrarse">Registrarse</Link> ahora.
          </div>
        </div>
      </div>
    </div>
  
  );
}
export default Login;