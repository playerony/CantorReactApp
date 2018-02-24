import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {
    Link
} from 'react-router-dom'

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            registerForm: {
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                username: this.props.user.username,
                password: '',
                email: this.props.user.email,
                balance: 0,
                roleId: 1
            }
        }

        this.onLoginChange = this.onLoginChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onFirstNameChange = this.onFirstNameChange.bind(this)
        this.onLastNameChange = this.onLastNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
    }

    onLoginChange(event) {
        let login = event.target.value
        this.state.registerForm.username = login
    }

    onPasswordChange(event) {
        let password = event.target.value
        this.state.registerForm.password = password
    }

    onFirstNameChange(event) {
        let firstName = event.target.value
        this.state.registerForm.firstName = firstName
    }

    onLastNameChange(event) {
        let lastName = event.target.value
        this.state.registerForm.lastName = lastName
    }

    onEmailChange(event) {
        let email = event.target.value
        this.state.registerForm.email = email
    }

    render() {
        const { alert, isFetching, isError, isRegistered, user, title, buttonText, onSubmit, redirectPage } = this.props

        console.log(redirectPage)

        return (
            <div>
                <h1 className="text-center">{title}</h1>
                <br></br>

                {isRegistered &&
                    <Redirect to={redirectPage} />}

                {isError &&
                    <div className="alert alert-danger">
                        <strong>{alert.type}!</strong> {alert.message}.
                    </div>
                }

                {!isError && isFetching && <h2>Logging in...</h2>}

                <br></br>

                <form onSubmit={e => {onSubmit(this.state.registerForm, e)}} className="form-horizontal" >
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="login">Login:</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="Enter login" minLength="3" maxLength="30" required 
                                   onChange={this.onLoginChange} value={this.state.registerForm.login} className="form-control" id="login"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="password">Password:</label>
                        <div className="col-sm-10">
                            <input type="password" placeholder="Enter password" minLength="3" maxLength="15" required 
                                   onChange={this.onPasswordChange} value={this.state.registerForm.password} className="form-control" id="password" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="firstName">First Name:</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="Enter First Name" minLength="2" maxLength="20" required 
                                   onChange={this.onFirstNameChange} value={this.state.registerForm.firstName} className="form-control" id="firstName"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="lastName">Last Name:</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="Enter Last Name" minLength="2" maxLength="40" required 
                                   onChange={this.onLastNameChange} value={this.state.registerForm.lastName} className="form-control" id="lastName"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" placeholder="Enter email" maxLength="50" required 
                                   onChange={this.onEmailChange} className="form-control" id="email"/>
                        </div>
                    </div>
                        
                    <br></br>

                    <div className="form-group">        
                        <div className="col-sm-offset-2 col-sm-7">
                            <input type="submit" value={buttonText} className="btn btn-success" />
                        </div>
                        <Link to={redirectPage} className="btn btn-danger col-sm-3">Back</Link>
                    </div>
                </form>
            </div>
        )
    }
}
export default UserForm