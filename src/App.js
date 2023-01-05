import "./Styles/App.css"
import React from 'react';
import { logout } from "./pages/Firebase";
import { useState } from "react";
import imagen1 from './images/biblioteca.jpeg';
import imagen2 from './images/lazaro.jpeg'
import imagen3 from './images/miguel.jpeg'
import imagen4 from './images/octubre.jpeg'
import imagen5 from './images/palmas.jpeg'
import imagen6 from './images/palmira.jpeg'
import imagen7 from './images/penjamo.jpeg'
import imagen8 from './images/pradera.jpeg'
import imagen9 from './images/varillero.jpeg'
import imagen10 from './images/zapata.jpeg'


function App() {

  const [imagen,setImagen] = useState(imagen1)
  const [tarifa,setTarifa] = useState("56 pesos")
  const [kilometros,setKilometros] = useState("5.6km")
  const [tiempo,setTiempo] = useState("13 min")

  const llamar = () =>{
    const elemento = document.getElementById("recogida")
    alert("Un Uber irá a recogerte en tu ubicación actual: "+  elemento.value)
  }

  const cambiar = () =>{
    const elemento = document.getElementById("destino")
    
    if(elemento.value == "biblioteca"){
      setImagen(imagen1)
      setKilometros("5.6km")
      setTiempo("13 min")
      setTarifa("56 pesos");
    }else if(elemento.value=="lazaro"){
      setImagen(imagen2)
      setKilometros("6.6km")
      setTiempo("15 min")
      setTarifa("66 pesos");
    }else if(elemento.value=="miguel"){
      setImagen(imagen3)
      setKilometros("5.9km")
      setTiempo("12 min")
      setTarifa("60 pesos");
    }else if(elemento.value=="22"){
      setImagen(imagen4)
      setKilometros("7.2km")
      setTiempo("14 min")
      setTarifa("72 pesos");
    }else if(elemento.value=="palmas"){
      setImagen(imagen5)
      setKilometros("6.8km")
      setTiempo("14 min")
      setTarifa("68 pesos");
    }else if(elemento.value=="palmira"){
      setImagen(imagen6)
      setKilometros("6.2km")
      setTiempo("13 min")
      setTarifa("62 pesos");
    }else if(elemento.value=="penjamo"){
      setImagen(imagen7)
      setKilometros("7km")
      setTiempo("14 min")
      setTarifa("70 pesos");
    }else if(elemento.value=="pradera"){
      setImagen(imagen8)
      setKilometros("7km")
      setTiempo("14 min")
      setTarifa("70 pesos");
    }else if(elemento.value=="varillero"){
      setImagen(imagen9)
      setKilometros("4.4km")
      setTiempo("9 min")
      setTarifa("44 pesos");
    }else if(elemento.value=="zapata"){
      setImagen(imagen10)
      setKilometros("7.8km")
      setTiempo("16 min")
      setTarifa("78 pesos");
    }
  }


  return (
    <div>
      <div class="container"></div>
      <div class="topnav" id="myTopnav">
        <a href="/" class="active">Uber</a>
        
      <div class="dropdown">
        <button class="dropbtn">Viajar
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Resumen</a>
          <a href="#">Seguridad</a>
          <a href="#">Ciudades</a>
          <a href="#">Aeropuertos</a>
          <a href="#">Empresa</a>
          
        </div>
        </div>
        
      <div class="dropdown">
        <button class="dropbtn">conducir
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Resumen</a>
          <a href="#">Requisitos</a>
          <a href="#">Cómo funciona Uber</a>
          <a href="#">Ciudadanía Global</a>

        </div>
        </div>
        
        
      <div class="dropdown">
        <button class="dropbtn">Más
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Uber eats</a>
          <a href="#">Uber para empresas</a>
          <a href="#">Entrega</a>
          <a href="#">Uber Freigth</a>
          <a href="#">Uber Health</a>
          <a href="#">Uber Charter</a>
          </div>
        </div>
        <div class="dropdown">
        <button class="dropbtn">Mi cuenta
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Ayuda</a>
          <a href="#">Perfil</a>
          <a href="/" onClick={logout}>Cerrar Sesión</a>
          </div>
        </div>
      
      </div>
      <div className="panel-lateral">
        <h2>¿Dónde podemos recogerte?</h2>
        <label for="recogida">Elige lugar de recogida:</label>
        <select id="recogida" name="recogida">
          <option value="Tecnológico">Instituto Tecnológico Superior de Apatzingán</option>
        </select>
        <label for="destino">Elige lugar de destino:</label>
        <select id="destino" name="destino" onChange={cambiar}>
          <option value="biblioteca">Biblioteca Benito Juárez</option>
          <option value="penjamo">Penjamo</option>
          <option value="pradera">Pradera</option>
          <option value="varillero">Varillero</option>
          <option value="lazaro">Lázaro Cárdenas</option>
          <option value="miguel">Miguel Hidalgo</option>
          <option value="palmira">Palmira</option>
          <option value="zapata">Emiliano Zapata</option>
          <option value="22">22 de Octubre</option>
          <option value="palmas">Las Palmas</option>
        </select>
        <button onClick={llamar}>Solicitar Uber</button>

        <p>Kilometros: {kilometros}</p>
        <p>Tiempo: {tiempo}</p>
        <p>Tarifa: {tarifa}</p>
        
      </div>
      <div className="panel-izquierdo">
        <img src={imagen} width="100%" height="100%"/>
      </div>
    </div>
  );
}

export default App;
