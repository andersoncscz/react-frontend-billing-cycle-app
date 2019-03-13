const BASE_URL = 'http://localhost:80/api'
const INITIAL_VALUES = {
    credits: [{}], debts: [{}]    
}

import axios from 'axios';

import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';

import { selectTab, showTabs } from './tabActions';
import { TAB_LIST, TAB_CREATE, TAB_UPDATE, TAB_DELETE } from '../../common/tab/constants';

import { BILLING_CYCLE_FORM } from '../../billingCycle/constants';

export const GET_LIST = 'GET_LIST';
export const getList = () => {
    return async dispatch => {
        const request = await axios.get(`${BASE_URL}/billingCycles`);
        dispatch({
            type: GET_LIST,
            list: request.data
        })
    }
}

export const create = values => {
    return submit(values,'post')
}


export const update = values => {
    return submit(values,'put')
}

export const remove = values => {
    return submit(values,'delete')
}

export const showUpdateTab = billingCycle => {
    return [
        showTabs(TAB_UPDATE),
        selectTab(TAB_UPDATE),
        initialize(BILLING_CYCLE_FORM, billingCycle)
    ]
}


export const showDeleteTab = billingCycle => {
    return [
        showTabs(TAB_DELETE),
        selectTab(TAB_DELETE),
        initialize(BILLING_CYCLE_FORM, billingCycle)
    ]
}


export const initializeForm = () => {
    return [
        showTabs(TAB_CREATE, TAB_LIST),
        selectTab(TAB_LIST),
        getList(),
        initialize(BILLING_CYCLE_FORM, INITIAL_VALUES)
    ]
}


const submit = (values, method) => {
    return async dispatch => {
        try {
            
            const id = values._id ? values._id: '';
            await axios[method](`${BASE_URL}/billingCycles/${id}`, values);
            //Despacha um array de actions com redux-multi
            dispatch(initializeForm())
            toastr.success('Sucesso', 'Operação realizada com sucesso!')
        } catch (er) {
            const { errors } = er.response.data;
            errors.forEach(error => toastr.error('Erro', error));            
        }
    }    
}