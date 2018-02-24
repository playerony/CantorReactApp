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
                userId: login.payload.id,
                currencyCode: currencyCode,
                currencyAmount: 1
            }

            console.log(userCurrency)

            let userCurrencies = fetchUserCurrencies.payload
            let element = userCurrencies.find(item => item.currencyCode == currencyCode)

            if(element != null) {
                userCurrency.userCurrencyId = element.userCurrencyId

                dispatch(buyUserCurrency(userCurrency))
            } else {
                dispatch(insertUserCurrency(userCurrency))
            }
            
            this.handleRefresh()
        }
    }

    render() {
        const { payload, isFetching, isError, alert } = this.props

        return (
            <div>
                {isError && 
                    <div className="alert alert-warning">
                        <strong>{alert.type}!</strong> {alert.message}.
                    </div>}
                    
                {!isError && isFetching && payload.length === 0 && <h2>Loading...</h2>}
                {!isError && !isFetching && payload.length === 0 && <h2>Empty.</h2>}
                {!isError && payload.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <CurrencyTable currencies={payload} 
                                       onClick={this.handleSaveUserCurrency} />
                    </div>}
            </div>
        )
    }
}

Currencies.propTypes = {
    payload: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { fetchCurrencies, fetchUserCurrencies, login, alert } = state

    const {
        isFetching,
        isError,
        payload: payload
    } = fetchCurrencies || {
        isFetching: true,
        isError: false,
        payload: []
    }

    return {
        payload,
        isFetching,
        isError,
        fetchUserCurrencies,
        login,
        alert
    }
}
export default connect(mapStateToProps)(Currencies)