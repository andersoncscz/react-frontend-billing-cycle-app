import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

import { login, signup } from '../redux/actions'

import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import ConditionalRenderer from '../common/operator/conditionalRenderer'
import Messages from '../common/msg/messages'
import Input from '../common/form/inputAuth'

class Auth extends Component {

    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }

    toogleMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values) {
        const { login, signup } = this.props
        this.state.loginMode ? login(values) : signup(values)
    }

    render() {

        const { loginMode } = this.state
        const { handleSubmit } = this.props

        return (
            <div className="login-box">
                <div className="login-logo"><b> My</b> Money</div>
                <div className="login-box-body">
                    <p className="login-box-msg">Bem vindo!</p>
                    <form onSubmit={handleSubmit(values => this.onSubmit(values))}>
                        <Field component={Input} type="input" name="name"
                            placeholder="Nome" icon='glyphicon glyphicon-user' hide={loginMode} />
                        <Field component={Input} type="email" name="email"
                            placeholder="E-mail" icon='glyphicon glyphicon-envelope' />
                        <Field component={Input} type="password" name="password"
                            placeholder="Senha" icon='glyphicon glyphicon-lock' />
                        <Field component={Input} type="password" name="confirm_password"
                            placeholder="Confirmar Senha" icon='glyphicon glyphicon-lock' hide={loginMode} />
                        <Row>
                            <Grid cols="4">
                                <button type="submit"
                                    className="btn btn-primary btn-block btn-flat">
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </button>
                            </Grid>
                        </Row>
                    </form>
                    <br />
                    <a onClick={() => this.toogleMode()}>
                        {loginMode ? 'Novo usuário? Registrar aqui!' :
                            'Já é cadastrado? Entrar aqui!'}
                    </a>
                </div>
                <Messages />
            </div>
        )
    }
}

const mapDispatchToProps = {
    login,
    signup
}

Auth = connect(null, mapDispatchToProps)(Auth)
export default reduxForm({ form: 'authForm' })(Auth)
