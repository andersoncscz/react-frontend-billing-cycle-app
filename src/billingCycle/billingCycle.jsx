import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';

import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';

import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';


import { connect } from 'react-redux';
import { create, update, remove, initializeForm } from '../redux/actions';
import List from './billingCycleList';
import Form from './billingCycleForm';

import { TAB_CREATE, TAB_UPDATE, TAB_DELETE, TAB_LIST  } from '../common/tab/constants';

class BillinCycle extends Component {
    

    componentWillMount() {
        this.props.initializeForm()
    }

    render() {

        const { create, update, remove } = this.props;

        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader target={TAB_CREATE} icon='fa fa-plus' label='Incluir' />
                            <TabHeader target={TAB_UPDATE} icon='fa fa-pencil' label='Alterar' />
                            <TabHeader target={TAB_DELETE} icon='fa fa-trash-o' label='Excluir' />
                            <TabHeader target={TAB_LIST} icon='fa fa-bars' label='Listar' />                            
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id={TAB_CREATE}>
                                <Form onSubmit={create} submitClass='btn btn-primary' submitLabel='Incluir' />
                            </TabContent>
                            <TabContent id={TAB_UPDATE}>
                                <Form onSubmit={update} submitClass='btn btn-info' submitLabel='Alterar' />
                            </TabContent>
                            <TabContent id={TAB_DELETE}>
                                <Form onSubmit={remove} readOnly={true} submitClass='btn btn-danger' submitLabel='Excluir' />
                            </TabContent>
                            <TabContent id={TAB_LIST}>
                                <List />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = {
    initializeForm,
    create,
    update,
    remove
}

export default connect(null, mapDispatchToProps)(BillinCycle);