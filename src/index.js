import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Registrarse from './pages/Registrarse';
import Dashboard from './pages/Dashboard';
import Reset from './pages/Reset';
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Inicio' element={<App />} />
        <Route path='/Registrarse' element={<Registrarse />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Reset' element={<Reset />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

