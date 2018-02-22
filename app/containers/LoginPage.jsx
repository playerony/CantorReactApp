import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import {
    login,
    logout
} from '../actions/login/login.action.js'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loginForm: {
                username: '',
                password: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onLoginChange = this.onLoginChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
    }

    onLoginChange(event) {
        let login = event.target.value
        this.state.loginForm.username = login
    }

    onPasswordChange(event) {
        let password = event.target.value
        this.state.loginForm.password = password
    }

    handleSubmit(event) {
        event.preventDefault()

        const { dispatch } = this.props
        dispatch(login(this.state.loginForm.username, this.state.loginForm.password))
    }

    render() {
        const { isFetching, isError, isAuthenticated, alert } = this.props

        return (
            !isAuthenticated ?
                <div>
                    <h1>Login page</h1>

                    {isError &&
                        <div className="alert alert-danger">
                            <strong>{alert.type}!</strong> {alert.message}.
                        </div>
                    }

                    {!isError && isFetching && <h2>Logging in...</h2>}

                    <form onSubmit={this.handleSubmit} className="form-horizontal" >
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="login">Login:</label>
                            <div className="col-sm-10">
                                <input type="text" placeholder="Enter login" maxLength="50" required 
                                    onChange={this.onLoginChange} className="form-control" id="login"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="password">Password:</label>
                            <div className="col-sm-10">
                                <input type="text" placeholder="Enter password" maxLength="80" required 
                                    onChange={this.onPasswordChange} className="form-control" id="password" />
                            </div>
                        </div>
                        
                        <div className="form-group">        
                            <div className="col-sm-offset-2 col-sm-10">
                                <input type="submit" value="Sing in" className="btn btn-success" />
                            </div>
                        </div>
                    </form>
                </div>
            :
                <Redirect to='/home'/>
        )
    }
}

LoginPage.propTypes = {
    payload: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { login, alert } = state

    const {
        isFetching,
        isError,
        payload: payload,
        isAuthenticated
    } = login || {
        isFetching: true,
        isError: false,
        isAuthenticated: false,
        payload: []
    }

    return {
        isFetching,
        isError,
        payload: payload,
        isAuthenticated,
        alert
    }
}
export default connect(mapStateToProps)(LoginPage)