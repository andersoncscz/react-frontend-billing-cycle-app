import { TOKEN_VALIDATED, USER_FETCHED } from "../actions/authActions";

const userKey = '_mymoney_user'
const INITIAL_STATE = {
    //user: JSON.parse(localStorage.getItem(userKey)), //Pega a chave do usuario do localstorage do browser
    user: {name: 'Anderson Cruz', email: 'andersoncscz@hotmail.com'},
    validToken: false //Inicialmente o token não é valido
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOKEN_VALIDATED:
            if (action.payload) {
                //TOKEN VALIDADO
                return { ...state, validToken: true }
            } 
            else {
                //TOKEN INVALIDO OU EXPIRADO: Remove a chave do localstorage e limpa o user da store
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case USER_FETCHED:
            //USUARIO CARREGADO: Grava o TOKEN VALIDO do usuário no localstorage e seta o user na store
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}