import React from 'react';

const ContentHeader = props => {
    const { title, small } = props;
    return (
        <section className='content-header'>
            <h1>
                {title} <small>{small}</small>
            </h1>
        </section>
    )
}

export default ContentHeader;
