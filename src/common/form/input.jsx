import React from 'react'

const Input = props => {
    const { input, placeHolder, readOnly, type } = props;
    return (
        <input 
            {...input} 
            className='form-control' 
            placeholder={placeHolder} 
            readOnly={readOnly} 
            type={type} />
    )
}

export default Input; 