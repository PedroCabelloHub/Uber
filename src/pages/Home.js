import "../Styles/home.css"
import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import {
  RecoilRoot,
} from 'recoil';


const Home = () => (
  <RecoilRoot> 
    <div class="bg-img">
      <div class="container">
      </div>
      <div class="topnav" id="myTopnav">
        <a href="/" class="active">Uber</a>
        <div class="dropdown">
        <button class="dropbtn">Compañía ▼
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Quiénes Somos</a>
          <a href="#">Lo que Ofrecemos</a>
          <a href="#">Cómo funciona Uber</a>
          <a href="#">Ciudadanía Global</a>
          <a href="#">Sala Prensa</a>
          <a href="#">Relaciones con los Invercionistas</a>
          <a href="#">Blog</a>
          <a href="#">Carreras</a>
        </div>
        </div>
          <a href="#about">Seguridad</a>
          <a href="#Ayuda">Ayuda</a>
          <a id="btns" href="Login">Iniciar Sesión</a>
          <a id="btns" href="Registrarse">Registrarse</a>
      </div>
      <div className="cuadro-flotante">
        <div className="opciones">
          <button className="active">
            Conduce o haz entregas
          </button>
          <button>
            Comida
          </button>
          <button>
            Viaje
          </button>
        </div>
        <div className="info">
          <h2>
            Ponte al volante y genera ganancias
          </h2>
          <p>Conduce en la plataforma que tiene mayor cantidad de usuarios activos</p>
          <button>Registrate para conducir</button>
          <p>Conoce más sobre cómo conducir y hacer entregas</p>
        </div>
      </div>
    </div>
  </RecoilRoot>
)


export default Home;