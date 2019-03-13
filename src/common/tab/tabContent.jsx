import React, { Component } from 'react';

import { connect } from 'react-redux';

import ConditionalRenderer from '../operator/conditionalRenderer';

class TabContent extends Component {
    
    render() {

        const { id, tab } = this.props;
        const { children } = this.props;
        const tabSelected = tab.selected === id;
        const visible = tab.visible[id]; //verifica se o conteudo(id) da aba sera visible

        return (
            <ConditionalRenderer test={visible}>
                <div id={id} className={`tab-pane ${tabSelected ? 'active' : ''}`}>
                    {children}
                </div>
            </ConditionalRenderer>
        );
    }
}

const mapStateToProps = state => ({
    tab: state.tab
});

export default connect(mapStateToProps)(TabContent);