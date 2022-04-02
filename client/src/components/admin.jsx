import axios from 'axios';
import React, {useState} from 'react';
import { Form, FormGroup , Label, Input, Button , Table} from "reactstrap"
import {Link} from "react-router-dom"

const Admin= props => {
    const initialValues = {
        firstName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const erroresIniciales = {
        firstName: "",
        errEmail: "",
        errPassword: "",
        errConfirmPassword: ""
    }  
    
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState(erroresIniciales);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputs(initialValues);
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs({...inputs, [name]: value})
        if (name === 'confirmPassword') {
            if (inputs.password !== value) {
                setErrors({
                    ...errors,
                    errConfirmPassword: "*Passwords must match"
                });
            } else {
                setErrors({
                    ...errors,
                    errConfirmPassword: ''
                });
            }
        }
    }
    
    return ( 
    <div>
      
        <h1>Admin Page</h1>
            <h2>Register</h2>
            <Form className='adminForm' onSubmit={handleSubmit}>
                <FormGroup >
                    <Label>First Name:</Label>
                    <Input  type='text' name='firstName' value={inputs.firstName} onChange={handleChange} required/>
                    {errors['firstName'] ? <p className="errors_reg_log">{errors['firstName'].message}</p>: ''}             
                </FormGroup>
                <FormGroup >
                    <Label>Email:</Label>
                    <Input  type='email' name='email' value={inputs.email} onChange={handleChange} required/>
                    {errors['email'] ? <p className="errors_reg_log">{errors['email'].message}</p>: ''}
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>                    
                    <Input type='password' name='password' value={inputs.password} onChange={handleChange} required/>
                    {errors['password'] ? <p className="errors_reg_log">{errors['password'].message}</p>: ''}
                    {
                    errors &&
                    <p className="errors_reg_log">{errors.errConfirmPassword}</p>
                    }
                </FormGroup>
                <FormGroup>
                    <Label>Confirm:</Label>                    
                    <Input type='password' name='confirmPassword' value={inputs.confirmPassword} onChange={handleChange} required minLength={6}/>
                </FormGroup> 
                <Button type="submit">Register</Button>
            </Form>
            <Link to={"/ViewAdmin"}> Detalles </Link>
     
    </div> 
    );
}

export default Admin;