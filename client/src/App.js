import logo from './logo.svg';
import './App.css';
import Admin from './components/admin';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import CreationForm from './components/CreationForm';
import ViewAdmin from './screens/viewAdmin';
import { Link } from "react-router-dom";
import img1 from "../src/imagenes/logo.jpg"
import Catalogo from './components/Catalogo';
import ComoComprar from './components/ComoComprar';




function App() {
  return (
    <>
    <header >
    <img className="logo" src={img1} alt="logo"></img>
    <nav id="menu-var">
          <Link  to={"/"}  className="menu-option">Inicio</Link>
          <Link  to={"/Catalogo"} className="menu-option">Catalogo</Link>
          <Link  to={"/ComoComprar"} className="menu-option">Como comprar</Link>
          <Link  to={"/Contacto"} className="menu-option">Contacto</Link>
   </nav>
      
  </header>
    
           <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="/admin/register" element={<Admin/>} />
                 <Route path="/contacto" element={<CreationForm/>} />
                 <Route path="/ViewAdmin" element={<ViewAdmin/>} />
                 <Route path="/Catalogo" element={<Catalogo/>} />
                 <Route path="/ComoComprar" element={<ComoComprar/>} />

            </Routes>
    
   </>
  );
}

export default App;
