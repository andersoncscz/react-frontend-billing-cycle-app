import React from 'react';

const layout = props => {
    const { children } = props;
    return (
        <div className='row'>
            {children}
        </div>
    );
}

export default layout;
