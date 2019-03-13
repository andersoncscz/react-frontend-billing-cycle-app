import React from 'react';

const TabsContent = props => {
    const { children } = props;
    return (
        <div className='tab-content'>
            {children}
        </div>
    )
};

export default TabsContent;
