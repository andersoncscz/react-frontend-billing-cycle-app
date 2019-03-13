import React from 'react';

const MenuItem = props => {
    const { path, icon, label } = props;
    return (
        <li className=''>
            <a href={path}>
                <i className={icon}></i> {label}
            </a>
        </li>
    )
};

export default MenuItem;
