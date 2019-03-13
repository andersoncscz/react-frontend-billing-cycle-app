import React from 'react';

const TabsHeader = props => {
    const { children } = props;
    return (
        <ul className='nav nav-tabs'>
            {children}
        </ul>
    )
};

export default TabsHeader;
