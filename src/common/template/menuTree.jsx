import React from 'react';

const MenuTree = props => {
    const { icon, label } = props;
    const { children } = props; //componentes filhos
    return (
        <li className='treeview'>
            <a>
                <i className={icon}></i> <span>{label}</span>
                <i className='fa fa-angle-left pull-right'></i>
            </a>
            <ul className='treeview-menu'>
                {children}
            </ul>
        </li>
    );    
}

export default MenuTree;
