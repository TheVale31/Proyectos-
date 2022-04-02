import Catalogo from "../components/Catalogo";
import ComoComprar from "../components/ComoComprar";
import CreationForm from "../components/CreationForm";
import { Link } from "react-router-dom";
import img1 from "../imagenes/logo.jpg"


function Home() {
    return ( 
    < >
        <div className="home-content">
            <h5>La Piñata  </h5>
            <h4> de tus sueños </h4>
            <img className="logo-content" src={img1} alt="logo"></img>
        </div>
        
        <Catalogo/>
        <ComoComprar/>
        <CreationForm/>
    </> );
}

export default Home;