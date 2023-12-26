import React from 'react';
import '../Components/SignUp.css';

import { useRef, useState } from 'react';
import FormInput from '../Components/FormInput';
import { useHistory } from 'react-router-dom';


export default function SignUp() {

    const history = useHistory();


    const [values, setValues] = useState({
        Firstname: "",
        email: "",
        password: "",
        ConfirmPassword: "",
        MobileNumber: "",
    });
    const inputs = [
        {
            id: 1,
            name: "Firstname",
            type: "text",
            placeholder: "Enter your name",
            errorMessage: "It should contain atleast 5-16 characters",
            label: "Firstname",
            pattern: "^[A-Za-z0-9]{5,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Enter your Email",
            errorMessage: "It should be a valid email address",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Create new Password",
            errorMessage: "It should include 8-20 characters and atleast 1 special characters,1 number",
            label: "CreatePassword",
            pattern: "^(?=.[0-9])(?=.[a-zA-Z])(?=.[!@#$%&^])[a-zA-Z0-9!@#$%^*&]{8-20}$",
            required: true,
        },
        {
            id: 4,
            name: "ConfirmPassword",
            type: "password",
            placeholder: "ConfirmPassword",
            errorMessage: "Password doesn't match",
            label: "ConfirmPassword",
            pattern: values.password,
            required: true,
        },
        {
            id: 5,
            name: "MobileNumber",
            type: "text",
            placeholder: " Enter your MobileNumber",
            errorMessage: "It should contain only 10 digits",
            label: "MobileNumber",
            pattern: "[0-9]{10}",
            required: true,

        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    console.log(values);
    return (
        <>
            <div className="signup">
                <form className='form' onSubmit={handleSubmit}>
                    <h1 className='heading'>Signup</h1>
                    {inputs.map((input) => (

                        <FormInput key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}

                    <button className='Button' onClick={()=>{history.push('/home')}}>Signup</button>
                    <div className="mo">Already an member?<button className='Button' onClick={()=>{history.push('/login')}}>Login</button></div>


                </form>

            </div>

        </>
    )
}
