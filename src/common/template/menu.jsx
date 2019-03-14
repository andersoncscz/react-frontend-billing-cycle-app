import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

const Menu = props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='fa fa-dashboard' />
        <MenuTree label='Cadastro' icon='fa fa-edit'>
            <MenuItem path='billingCycles' label='Ciclos de Pagamentos' icon='fa fa-usd' />
        </MenuTree>
    </ul>
);

export default Menu;
