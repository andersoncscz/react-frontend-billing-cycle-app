import React from 'react';

const Content = props => {
    const { children } = props;
    return (
        <section className='content'>
            {children}
        </section>
    )
}

export default Content;
