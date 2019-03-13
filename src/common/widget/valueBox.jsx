import React from 'react';
import Grid from '../layout/grid';

const ValueBox = props => {
    
    const { cols, value, text, icon, color } = props;

    return (
        <Grid cols={cols}>
            <div className={`small-box bg-${color}`}>
                <div className='inner'>
                    <h3>{value}</h3>
                    <p>{text}</p>
                </div>
                <div className='icon'>
                    <i className={icon}></i>
                </div>
            </div>
        </Grid>
    )
}

export default ValueBox;