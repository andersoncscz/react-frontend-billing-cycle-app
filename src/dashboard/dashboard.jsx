import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

import { connect } from 'react-redux';

import { getSummary } from '../redux/actions';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }
    

    componentWillMount() {
        this.props.getSummary();
    }

    render(){

        const { credit, debt} = this.props.summary;

        return (
            <div>
                <ContentHeader title='Dashboard' small='V 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='fa fa-bank' value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='fa fa-credit-card' value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='fa fa-money' value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        );
    }
} 

const mapStateToProps = state => ({
    summary: state.dashboard.summary
});

const mapDispatchToProps = {
    getSummary,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
