import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Link
} from 'react-router-dom'

import {
    logout
} from '../actions/login/login.action.js'

class NavigationBar extends Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        const { dispatch } = this.props
        dispatch(logout())
    }

    render() {
        const { isAuthenticated } = this.props

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        {isAuthenticated ?
                            <Link to="/home" className="navbar-brand">Exchange</Link>
                        :
                            <Link to="/" className="navbar-brand">Exchange</Link>
                        }
                    </div>

                    {isAuthenticated &&
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <Link to="/" className="navbar-brand" onClick={this.handleLogout}>Sing up</Link>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    const { login } = state

    const {
        isAuthenticated
    } = login || {
        isAuthenticated: false
    }

    return {
        isAuthenticated
    }
}
export default connect(mapStateToProps)(NavigationBar)