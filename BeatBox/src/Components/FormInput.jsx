import React from 'react';
import '../Components/FormInput.css';
import { useState } from 'react';


const FormInput = (props) => {

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <>
            <div className="formInput">
                <label className='label'>{label}</label>
                <input className='enter'
                    {...inputProps}
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={() =>
                        inputProps.name === "ConfirmPassword" && setFocused(true)}
                    focused={focused.toString()} />
                <span className='span'>{errorMessage}</span>
            </div>
        </>
    )
}
export default FormInput;
