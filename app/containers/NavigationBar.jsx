import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/login" className="navbar-brand">Exchange</Link>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Sing up</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default NavigationBar