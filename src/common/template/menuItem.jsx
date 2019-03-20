import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = props => {
    const { path, icon, label } = props;
    return (
        <li className=''>
            <Link to={path}>
                <i className={icon}></i> <span>{label}</span>
            </Link>
        </li>
    )
};

export default MenuItem;
