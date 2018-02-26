import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    fetchUserCurrencies
} from '../actions/userCurrencies/get.action.js'
import {
    sellUserCurrency
} from '../actions/userCurrencies/update.action.js'
import {
    logout
} from '../actions/login/login.action.js'
import UserCurrencyTable from '../components/UserCurrencyTable.jsx'
import * as token from '../utils/TokenUtils.js'

class Wallet extends Component {
    constructor(props) {
        super(props)
        
        this.handleRefresh = this.handleRefresh.bind(this)
        this.handleSellUserCurrency = this.handleSellUserCurrency.bind(this)
    }

    componentDidMount() {
        const { dispatch, login } = this.props

        if(token.checkToken(login.payload)) 
            dispatch(logout())
        dispatch(fetchUserCurrencies(login.payload.id))
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
                currencyAmount: 1
            }

            let userCurrencies = fetchUserCurrencies.payload
            let element = userCurrencies.find(item => item.currencyCode == currencyCode)

            if(element != null) {
                userCurrency.userCurrencyId = element.userCurrencyId

                dispatch(sellUserCurrency(userCurrency))

                this.handleRefresh()
            }
        }
    }

    render() {
        const { payload, isFetching, isError, alert, fetchUser } = this.props

        return (
            <div>
                {isError && 
                    <div className="alert alert-danger">
                        <strong>{alert.type}!</strong> {alert.message}.
                    </div>}

                {!isError && isFetching && payload.length === 0 && <h2>Loading...</h2>}
                {!isError && !isFetching && payload.length === 0 && <h2>Empty.</h2>}
                {!isError && payload.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <UserCurrencyTable userCurrencies={payload} 
                                           onClick={this.handleSellUserCurrency} />
                    </div>}

                {fetchUser.payload != null && 
                    <div className="text-justify">
                        <h2>Available PLN: {fetchUser.payload.balance}</h2>
                    </div>}
            </div>
        )
    }
}

Wallet.propTypes = {
    payload: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { fetchUserCurrencies, fetchCurrencies, login, alert, fetchUser } = state

    const {
        isFetching,
        isError,
        payload: payload
    } = fetchUserCurrencies || {
        isFetching: true,
        isError: true,
        payload: []
    }

    let currencies = fetchCurrencies.payload
    for(let i=0 ; i<currencies.length ; i++) {
        for(let j=0 ; j<payload.length ; j++) {
            if(currencies[i].code == payload[j].currencyCode) {
                payload[j].sellPrice = currencies[i].sellPrice
            }
        }
    }

    return {
        payload,
        isFetching,
        isError,
        fetchUserCurrencies,
        login,
        alert,
        fetchUser
    }
}
export default connect(mapStateToProps)(Wallet)