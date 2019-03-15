import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import consts from '../../constants';

export const TOKEN_VALIDATED = 'TOKEN_VALIDATED'
export const USER_FETCHED = 'USER_FETCHED'

export const login = values => {
    return submit(values, `${consts.OAPI_URL}/login`)
}

export const signup = values => {
    return submit(values, `${consts.OAPI_URL}/signup`)
}

//Values: valores do formulario, url: url de login ou registrar
const submit = (values, url) => {
    return async dispatch => {
        try {
            const response = await axios.post(url, values)
            dispatch([
                //Despacha action do usuário carregado
                { type: USER_FETCHED, payload: response.data }
            ])
        } catch (e) {
            e.response.data.errors.forEach(
                error => toastr.error('Erro', error)
            )
        }
    }
}

export const logout = () => {
    return { type: TOKEN_VALIDATED, payload: false }
}

export const validateToken = token => {
    return async dispatch => {
        if (token) {
            try {
                const response = await axios.post(`${consts.OAPI_URL}/validateToken`, { token })
                dispatch({ type: TOKEN_VALIDATED, payload: response.data.valid })
            } catch (e) {
                dispatch({ type: TOKEN_VALIDATED, payload: false })
            }
        } 
        else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}
