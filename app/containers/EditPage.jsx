import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {
    Link
} from 'react-router-dom'

import {
    updateUser
} from '../actions/user/update.action.js'
import UserForm from '../components/UserForm.jsx'

class EditPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                userId: this.props.payload.userId,
                firstName: this.props.payload.firstName,
                lastName: this.props.payload.lastName,
                username: this.props.payload.username,
                password: '',
                email: this.props.payload.email,
                balance: this.props.payload.balance,
                roleId: 1
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(editForm, event) {
        event.preventDefault()

        const { dispatch } = this.props
        editForm.userId = this.state.user.userId
        dispatch(updateUser(editForm))
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
                          title="Edit Page"
                          buttonText="Edit Account"
                          redirectPage = "/home"
                          onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { alert, editUser, fetchUser } = state

    const {
        isFetching,
        isError,
        isRegistered
    } = editUser || {
        isFetching: true,
        isError: false
    }

    const {
        payload
    } = fetchUser

    return {
        alert,
        isFetching,
        isError,
        isRegistered,
        payload
    }
}
export default connect(mapStateToProps)(EditPage)