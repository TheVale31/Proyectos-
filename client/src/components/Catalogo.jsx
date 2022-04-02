import pin1 from"../imagenes/pin1.jpg"
import pin2 from"../imagenes/pin2.jpg"
import pin3 from"../imagenes/pin3.jpg"
import pin5 from"../imagenes/pin5.jpg"


function Catalogo() {
    return ( 
        <div>
            <section>
                <h4>Revisa nuestro</h4>
                <h3>Catalogo</h3>
            </section>
                <h1>Piñatas</h1>
                <ul  className="fotos">
                    <li>
                        <img className="pin" src={pin1} alt="piñata1" />
                    </li>
                    <li>
                        <img className="pin" src={pin2} alt="piñata2" />
                    </li>
                    <li>
                        <img className="pin" src={pin3} alt="piñata3" />
                    </li>
                    <li>
                        <img className="pin" src={pin5} alt="piñata4" />
                    </li>
                   
                </ul>
                <ul className="precios">
                    <li>Piñata Mini -30cm 13 mil pesos</li>
                    <li>Piñata Pequeña -50cm 18 mil pesos</li>
                    <li>Piñata Grande -70cm 23 mil pesos</li>
                    <li>Piñata XL -1mt 28 mil pesos</li>
                    
                </ul>
        </div>
     );
}

export default Catalogo;