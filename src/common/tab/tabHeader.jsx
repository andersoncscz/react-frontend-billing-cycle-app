import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectTab } from '../../redux/actions';

import ConditionalRenderer from '../operator/conditionalRenderer';

class TabHeader extends Component {
    
    render() {
        
        const { target, label, icon, tab } = this.props;
        const { selectTab } = this.props; //actions
        const visible = tab.visible[target]; //verifica se a aba (target) sera visible

        //Verifica se a aba esta selecionada quando for renderiza-la, se estiver, aplica o className='active'
        const tabSelected = tab.selected === target;

        return (
            <ConditionalRenderer test={visible}>
                <li className={tabSelected ? 'active' : ''}>
                    <a 
                        href='javascript:;' 
                        data-toggle='tab' 
                        data-target={target} 
                        onClick={() => selectTab(target)}>
                        <i className={icon}></i> {label}
                    </a>
                </li>
            </ConditionalRenderer>
        );
    }
}


const mapStateToProps = state => ({
    tab: state.tab
});

const mapDispatchToProps = {
    selectTab
}


export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);