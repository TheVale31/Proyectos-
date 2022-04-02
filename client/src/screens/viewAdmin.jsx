import axios from 'axios';
import React, {useState} from 'react';
import { useEffect } from 'react';
import {  Table} from "reactstrap"

const ViewAdmin= props => {
    const initialValues = {
        firstName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [message, setMessage]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/admin')
        .then(res=>{

            const mensajes =res.data.creations 
            console.log(mensajes)

            setMessage(mensajes)
            
        })
        .catch(err=>console.log(err))
    },[])
    return(
        <Table>
        <thead>
          <tr>
            
            <th>
              Nombre
            </th>
            <th>
              Email
            </th>
            <th>
              Telefono
            </th>
            <th>
              Mensaje
            </th>
          </tr>
        </thead>
        <tbody>
        {
             message.map((items,index)=>(
                  <tr key={index}>
                 
                      <td>
                          {items.nombre}
                      </td>
                      <td>
                          {items.email}
                      </td>
                      <td>
                          {items.telefono}
                      </td> 
                      <td>
                          {items.mensaje}
                      </td> 
                  </tr>
                      )
                  )
                  }
            
              </tbody>
              </Table>
    )
}
export default ViewAdmin;
