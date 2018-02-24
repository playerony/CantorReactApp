import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    Link
} from 'react-router-dom'

import {
    logout
} from '../actions/login/login.action.js'
import {
    fetchUser
} from '../actions/user/get.action.js'

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
        const { isAuthenticated, payload } = this.props

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
                                <li>
                                    {payload != undefined &&
                                        <a>Logged in as {payload.firstName} {payload.lastName}</a>}
                                </li>
                                <li>
                                    <span className="glyphicon glyphicon-cog"></span>
                                </li>
                                <li>
                                    <Link to="/" onClick={this.handleLogout}><span className="glyphicon glyphicon-off"></span></Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        )
    }
}

NavigationBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { login, fetchUser } = state

    const {
        isAuthenticated
    } = login || {
        isAuthenticated: false
    }

    const {
        payload
    } = fetchUser

    return {
        isAuthenticated,
        payload
    }
}
export default connect(mapStateToProps)(NavigationBar)