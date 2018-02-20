import React, { Component } from 'react'

import Currencies from './Currencies.jsx'
import Wallet from './Wallet.jsx'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="container">
                        <h1>Currencies</h1> 
                    </div>

                    <Currencies />
                </div>

                <div className="col-sm-6">
                    <div className="container">
                        <h1>Wallet</h1> 
                    </div>

                    <Wallet />
                </div>
            </div>
        )
    }
}
export default HomePage