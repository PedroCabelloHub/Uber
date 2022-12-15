import "../Styles/home.css"
import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import {
  RecoilRoot,
} from 'recoil';


const Home = () => (
  <RecoilRoot> 
    <div class="bg-img">
      <div class="container"></div>
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
    </div>
  </RecoilRoot>
)


export default Home;