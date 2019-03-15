import '../common/template/dependencies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import App from './app'
import Auth from '../auth/auth'

import { validateToken } from '../redux/actions'

//Componente responsavel por renderizar tela de login (se token expirou) ou renderizar o App direto (Token valido)
class AuthOrApp extends Component {

    componentWillMount() {
        //Pega o user da Store do Redux e verifica se ele esta instanciado
        const { user } = this.props.auth
        const { token } = this.props.auth.user
        if (user) {
            //Dispacha a action passando o token do usuario
            this.props.validateToken(token)
        }
    }

    render() {
        
        const { children } = this.props
        const { user, validToken } = this.props.auth
        //Se o usuário está instanciado e com um token valido, então renderiza o <App />
        if (user && validToken) {
            //Seta o token no Header "Authorization". Dessa forma, o token será passado em todas as requisições feitas pelo axios dentro da aplicação.
            axios.defaults.headers.common['authorization'] = user.token //Configura o axios para sempre utilizar o token no header
            return <App>{children}</App>
        } 
        else if (!user && !validToken) {
            //Se usuário é null e não tem Token validado, renderiza <Auth />
            return <Auth />
        } 
        else {
            return false
        }
    }
}
const mapStateToProps = state => ({ 
    auth: state.auth 
})
const mapDispatchToProps = { 
    validateToken 
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)