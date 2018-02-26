import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {
    Link
} from 'react-router-dom'

import {
    insertUser
} from '../actions/user/insert.action.js'
import UserForm from '../components/UserForm.jsx'

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: '',
                balance: 1000,
                roleId: 1
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(registerForm, event) {
        event.preventDefault()

        const { dispatch } = this.props
        dispatch(insertUser(registerForm))
    }

    render() {
        const { alert, isFetching, isError, isRegistered } = this.props

        return (
            <div>
                <UserForm user={this.state.user}
                          alert={alert}
                          isFetching={isFetching}
                          isError={isError}
                          isRegistered={isRegistered}
                          title="Register Page"
                          buttonText="Register Account"
                          redirectPage = "/"
                          onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { alert, insertUser } = state

    const {
        isFetching,
        isError,
        isRegistered
    } = insertUser || {
        isFetching: true,
        isError: false
    }

    return {
        alert,
        isFetching,
        isError,
        isRegistered
    }
}
export default connect(mapStateToProps)(RegisterPage)