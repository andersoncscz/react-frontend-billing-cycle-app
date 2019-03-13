import React, { Component } from 'react'
import Grid from '../common/layout/grid';

import { Field, arrayInsert, arrayRemove } from 'redux-form';
import Input from '../common/form/input';

import { connect } from 'react-redux';
import { BILLING_CYCLE_FORM } from './constants';
import ConditionalRenderer from '../common/operator/conditionalRenderer';

class ItemList extends Component {


    add(index, item = {}) {
        
        const { readOnly, arrayInsert, field } = this.props;
        
        //Se esta incluindo ou alterando
        if (!readOnly) {
            arrayInsert(
                BILLING_CYCLE_FORM, //formulário alvo do redux-form
                field, //field do form
                index, //Indice que o elemento será inserido
                item //valor a ser inserido, objeto vazio por default : item = {}
            )
        }
    }

    remove(index) {
        
        const { readOnly, list, arrayRemove, field } = this.props;
        
        //Se esta incluindo ou alterando
        if (!readOnly && list.length > 1)  {
            arrayRemove(
                BILLING_CYCLE_FORM,
                field,
                index
            )
        }
    }


    renderRows() {
        
        const { readOnly, field, showStatus } = this.props;
        const list = this.props.list || [];
        
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`${field}[${index}].name`} component={Input} placeholder='Informe o nome' readOnly={readOnly} />
                    
                </td>
                <td>
                    <Field name={`${field}[${index}].value`} component={Input} placeholder='Informe o valor' readOnly={readOnly} />
                </td>
                <ConditionalRenderer test={showStatus}>
                    <td>
                        <Field name={`${field}[${index}].status`} component={Input} placeholder='Informe o status' readOnly={readOnly} />
                    </td>                
                </ConditionalRenderer>
                <td>
                    <button type='button' className='btn btn-success' onClick={() => this.add(index + 1)}>
                        <i className='fa fa-plus'></i>
                    </button>
                    <button type='button' className='btn btn-warning' onClick={() => this.add(index + 1, item)}>
                        <i className='fa fa-clone'></i>
                    </button>    
                    <button type='button' className='btn btn-danger' onClick={() => this.remove(index)}>
                        <i className='fa fa-trash-o'></i>
                    </button>                                      
                </td>
            </tr>
        ))
    }

    render() {

        const { cols, legend, showStatus } = this.props;

        return (
            <Grid cols={cols}>
                <fieldset>
                    <legend>{legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <ConditionalRenderer test={showStatus}>
                                    <th>Ações</th>
                                </ConditionalRenderer>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>                        
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = {
    arrayInsert,
    arrayRemove
}

export default connect(null, mapDispatchToProps)(ItemList)