import React,{useState} from "react";
import axios from 'axios';
import { Form, FormGroup , Label, Input, Button} from "reactstrap"

const CreationForm = (props)=> {

    const detallesIniciales= {
        nombre:"",
        email:"",
        telefono:"",
        mensaje:"",
    }
    const [input, setInput] = useState(detallesIniciales);

    const actualizarForm =(e)=>{
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value            
        });   
    }
    const enviarForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/creation',input)
        .then(res=>{
            setInput(detallesIniciales)})
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <h2 className="contacto">Contacto</h2>
            <Form>
                 <FormGroup>
                    <Label>Nombre:</Label> 
                    <Input   name="nombre" value={input.nombre} onChange={actualizarForm} required minLength={2}/>
                </FormGroup>
                <FormGroup >
                    <Label>Correo:</Label>
                    <Input   name="email" value={input.email} onChange={actualizarForm}  required minLength={5}/>
                </FormGroup>
                <FormGroup >
                    <Label>Telefono</Label>
                    <Input name="telefono" value={input.telefono} onChange={actualizarForm} />
                </FormGroup> 
                <FormGroup >
                    <Label>Mensaje:</Label>
                    <Input name="mensaje" type="textarea" value={input.mensaje} onChange={actualizarForm}  required minLength={5}/>
                </FormGroup>
            </Form>
            <Button className="enviar" onClick={enviarForm}>Enviar</Button>
        </div>
        
        
    )
}
export default CreationForm;