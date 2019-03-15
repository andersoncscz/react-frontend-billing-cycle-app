import React from 'react'

import ConditionalRenderer from '../operator/conditionalRenderer'

const InputAuth = props => {

    const { hide, input, placeHolder, readOnly, type, icon } = props

    return (
        <ConditionalRenderer test={!hide}>
            <div className="form-group has-feedback">
                <input {...input}
                    className='form-control'
                    placeholder={placeHolder}
                    readOnly={readOnly}
                    type={type} />
                <span className={`${icon} form-control-feedback`}></span>
            </div>
        </ConditionalRenderer>
    )
}

export default InputAuth