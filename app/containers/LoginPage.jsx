import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {
    Link
} from 'react-router-dom'

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
                    <h1 className="text-center">Login page</h1>
                    <br></br>

                    {isError &&
                        <div className="alert alert-danger">
                            <strong>{alert.type}!</strong> {alert.message}.
                        </div>
                    }

                    {!isError && isFetching && <h2>Logging in...</h2>}

                    <br></br>

                    <form onSubmit={this.handleSubmit} className="form-horizontal" >
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="login">Login:</label>
                            <div className="col-sm-10">
                                <input type="text" placeholder="Enter login" maxLength="30" required 
                                       onChange={this.onLoginChange} className="form-control" id="login"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="password">Password:</label>
                            <div className="col-sm-10">
                                <input type="password" placeholder="Enter password" maxLength="80" required 
                                       onChange={this.onPasswordChange} className="form-control" id="password" />
                            </div>
                        </div>
                        
                        <br></br>

                        <div className="form-group">        
                            <div className="col-sm-offset-2 col-sm-7">
                                <input type="submit" value="Sing in" className="btn btn-success" />
                            </div>
                            <Link to="/register" className="control-label col-sm-3">You dont have an account?</Link>
                        </div>
                    </form>
                </div>
            :
                <div>
                    <Redirect to='/home'/>
                </div>
        )
    }
}

LoginPage.propTypes = {
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