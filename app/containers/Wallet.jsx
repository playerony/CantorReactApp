import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    fetchUserCurrencies
} from '../actions/userCurrencies/get.action.js'
import {
    sellUserCurrency
} from '../actions/userCurrencies/update.action.js'
import UserCurrencyTable from '../components/UserCurrencyTable.jsx'

class Wallet extends Component {
    constructor(props) {
        super(props)
        this.handleRefresh = this.handleRefresh.bind(this)
        this.handleSellUserCurrency = this.handleSellUserCurrency.bind(this)
    }

    componentDidMount() {
        const { dispatch, login } = this.props
        dispatch(fetchUserCurrencies(login.payload.id))

        setInterval(this.handleRefresh(), 500);
    }

    handleChange() {
        const { dispatch, login } = this.props
        dispatch(fetchUserCurrencies(login.payload.id))
    }

    handleRefresh() {
        const { dispatch, login } = this.props
        dispatch(fetchUserCurrencies(login.payload.id))
    }

    handleSellUserCurrency(currencyCode) {
        if(confirm("Are you sure?") == true) {
            const { dispatch, currencies, fetchUserCurrencies, login } = this.props

            let userCurrency = {
                userCurrencyId: null,
                userId: login.payload.id,
                currencyCode: currencyCode,
                currencyAmount: 0
            }

            let userCurrencies = fetchUserCurrencies.payload
            let element = userCurrencies.find(item => item.currencyCode == currencyCode)

            if(element != null) {
                userCurrency.userCurrencyId = element.userCurrencyId
                userCurrency.currencyAmount = 1

                dispatch(sellUserCurrency(userCurrency))
                this.handleRefresh()
            }
        }
    }

    render() {
        const { userCurrencies, isFetching, error, message, lastUpdated } = this.props

        return (
            <div>
                {error && 
                    <div className="alert alert-warning">
                        <strong>Warning!</strong> {message} for UserCurrencies.
                    </div>}

                {!error && isFetching && userCurrencies.length === 0 && <h2>Loading...</h2>}
                {!error && !isFetching && userCurrencies.length === 0 && <h2>Empty.</h2>}
                {!error && userCurrencies.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <UserCurrencyTable userCurrencies={userCurrencies} onClick={this.handleSellUserCurrency} />
                    </div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { fetchUserCurrencies, fetchCurrencies, login } = state

    const {
        isFetching,
        error,
        lastUpdated,
        payload: userCurrencies,
        message
    } = fetchUserCurrencies || {
        isFetching: true,
        error: true,
        message: "unexpected error",
        payload: []
    }

    console.log(login)

    let currencies = fetchCurrencies.payload
    for(let i=0 ; i<currencies.length ; i++) {
        for(let j=0 ; j<userCurrencies.length ; j++) {
            if(currencies[i].code == userCurrencies[j].currencyCode) {
                userCurrencies[j].sellPrice = currencies[i].sellPrice
            }
        }
    }

    return {
        userCurrencies,
        isFetching,
        error,
        lastUpdated,
        fetchUserCurrencies,
        login
    }
}
export default connect(mapStateToProps)(Wallet)