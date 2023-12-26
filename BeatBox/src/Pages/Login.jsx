import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormInput from '../Components/FormInput';
import '../Components/SignUp.css';

const Login = () => {

    const history = useHistory();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Enter your Email",
            errorMessage: "It should be a valid email address",
            label: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Enter Password",
            errorMessage: "It should include 8-20 characters and atleast 1 special characters,1 number",
            label: "Password",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%&^*])[a-zA-Z0-9!@#$%^*&]{8-20}$",
            required: true,
        },

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

                    <h1 className='heading'>Login</h1>
                    {inputs.map((input) => (

                        <FormInput key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}

                    <button className='Button' onClick={()=>{history.push('/home')}}>Login</button>


                </form>

            </div>
        </>
    )
}

export default Login;