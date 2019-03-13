import React from 'react';

const Tabs = props => {
    const { children } = props;
    return (
        <div className='nav-tabs-custom'>
            {children}
        </div>
    )
};

export default Tabs;
