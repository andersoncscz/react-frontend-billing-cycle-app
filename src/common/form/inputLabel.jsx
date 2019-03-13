import React from 'react'
import Grid from '../layout/grid';

const InputLabel = props => {
    
    const { cols, name, label, placeHolder, readOnly, type } = props;
    
    /*
        Field do redux-form irá passar um objeto input com varias props para seus filhos, 
        neste caso, este componente que será um filho de Field, que irá passar para o filho dele, o input abaixo.
    */
    const { input } = props;
    
    return (
        <Grid cols={cols}>
            <div className='form-group'>
                <label htmlFor={name}>
                    {label}
                </label>
                <input 
                    {...input} 
                    className='form-control' 
                    placeholder={placeHolder} 
                    readOnly={readOnly} 
                    type={type} />
            </div>
        </Grid>
    )
}

export default InputLabel