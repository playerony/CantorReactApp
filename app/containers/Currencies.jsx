import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    fetchCurrencies
} from '../actions/currency/currencies.action.js'
import {
    insertUserCurrency
} from '../actions/userCurrencies/insert.action.js'
import {
    buyUserCurrency
} from '../actions/userCurrencies/update.action.js'
import {
    login
} from '../actions/login/login.action.js'

import CurrencyTable from '../components/CurrencyTable.jsx'

class Currencies extends Component {
    constructor(props) {
        super(props)
        this.handleRefresh = this.handleRefresh.bind(this)
        this.handleSaveUserCurrency = this.handleSaveUserCurrency.bind(this)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCurrencies())
        dispatch(login("test", "test"))
    }

    handleChange() {
        const { dispatch } = this.props
        dispatch(fetchCurrencies())
    }

    handleRefresh() {
        const { dispatch } = this.props
        dispatch(fetchCurrencies())
    }

    handleSaveUserCurrency(currencyCode) {
        if(confirm("Are you sure?") == true) {
            const { dispatch, currencies, fetchUserCurrencies, login } = this.props

            let userCurrency = {
                userCurrencyId: null,
                userId: login.id,
                currencyCode: currencyCode,
                currencyAmount: 0
            }

            let userCurrencies = fetchUserCurrencies.payload
            let element = userCurrencies.find(item => item.currencyCode == currencyCode)

            if(element != null) {
                userCurrency.userCurrencyId = element.userCurrencyId
                userCurrency.currencyAmount = 1

                dispatch(buyUserCurrency(userCurrency))
            } else {
                dispatch(insertUserCurrency(userCurrency))
            }

            this.handleRefresh()
        }
    }

    render() {
        const { currencies, isFetching, error, message, lastUpdated } = this.props

        return (
            <div>
                {error && 
                    <div className="alert alert-warning">
                        <strong>Warning!</strong> {message} for Currencies.
                    </div>}
                    
                {!error && isFetching && currencies.length === 0 && <h2>Loading...</h2>}
                {!error && !isFetching && currencies.length === 0 && <h2>Empty.</h2>}
                {!error && currencies.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <CurrencyTable currencies={currencies} 
                                       onClick={this.handleSaveUserCurrency} />
                    </div>}
            </div>
        )
    }
}

Currencies.propTypes = {
    currencies: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { fetchCurrencies, fetchUserCurrencies, login } = state

    const {
        isFetching,
        error,
        lastUpdated,
        payload: currencies,
        message
    } = fetchCurrencies || {
        isFetching: true,
        error: false,
        payload: []
    }

    return {
        currencies,
        isFetching,
        error,
        message,
        lastUpdated,
        fetchUserCurrencies,
        login
    }
}
export default connect(mapStateToProps)(Currencies)