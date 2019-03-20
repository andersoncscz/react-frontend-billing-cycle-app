import React, { Component } from 'react';

import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { initializeForm } from '../redux/actions';

import InputLabel from '../common/form/inputLabel';
import { BILLING_CYCLE_FORM } from './constants';
import ItemList from './itemList';
import Summary from './summary';

class BillingCycleForm extends Component {
    

    calculateSummary() {

        const { credits, debts } = this.props;
        const sum = (valueTotal, currentValue) => valueTotal + currentValue; //Soma valores do array mapeado

        return {
            //converte string para numero, ou zero se nao conseguir: +c.value || 0
            //.reduce() -> recebe uma funcao que irá transformar o array de numero em um unico numero, somando-os
            sumOfCredits: credits.map(c => +c.value || 0).reduce(sum, 0),
            sumOfDebts: debts.map(d => +d.value || 0).reduce(sum, 0)
        }
    }


    render() {

        const { handleSubmit, initializeForm, readOnly, submitClass, submitLabel, credits, debts } = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        
        return (
            <div>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                        
                        <Field name='name' component={InputLabel} label='Nome' cols='12 4' placeHolder='Informe o nome' readOnly={readOnly} />
                        <Field name='month' component={InputLabel} label='Mês' cols='12 4' placeHolder='Informe o mês' type='number' readOnly={readOnly} />
                        <Field name='year' component={InputLabel} label='Ano' cols='12 4' placeHolder='Informe o ano' type='number' readOnly={readOnly} />

                        <Summary credit={sumOfCredits} debt={sumOfDebts} />

                        <ItemList 
                            cols='12 6' 
                            readOnly={readOnly} 
                            list={credits} 
                            field='credits' 
                            legend='Créditos' />
                            
                        <ItemList 
                            cols='12 6' 
                            readOnly={readOnly} 
                            list={debts} 
                            field='debts' 
                            legend='Débitos' showStatus={true} />
                    </div>
                    <div className='box-footer'>
                        <button type='submit' className={submitClass}>{submitLabel}</button>
                        <button type='button' className='btn btn-default' onClick={initializeForm}>Cancelar</button>
                    </div>
                </form>
            </div>
        )
    }
}

/*
    destroyOnUnmount: false

    Flag para não destruir os dados do form, quando o componente for destruido. 
    Só é viavel quando se reutiliza o formulario, neste caso estamos utilizando o mesmo formulário de Inclusão, para fazer Alteração,
    ou seja, estamos reaproveitando o componente.
*/

const selector = formValueSelector(BILLING_CYCLE_FORM) //ID do formulário de onde será pego os dados
const mapStateToProps = state => ({
    credits: selector(state, 'credits'), //Pega a lista de créditos controlado pelo redux-form
    debts: selector(state, 'debts') //Pega a lista de créditos controlado pelo redux-form
})

const mapDispatchToProps = { initializeForm }


BillingCycleForm = connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
export default reduxForm({form: BILLING_CYCLE_FORM, destroyOnUnmount: false})(BillingCycleForm)