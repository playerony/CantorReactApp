import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchCurrencies
} from '../actions/currency/currencies.action.js'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCurrencies())
  }

  handleChange() {
    const { dispatch } = this.props
    dispatch(fetchCurrencies())
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(fetchCurrencies())
  }

  render() {
    const { currencies, isFetching, lastUpdated } = this.props
    return (
      <div>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>}
          {!isFetching &&
            <a href="#" onClick={this.handleRefreshClick}>
              Refresh
            </a>}
        </p>
        {isFetching && currencies.length === 0 && <h2>Loading...</h2>}
        {!isFetching && currencies.length === 0 && <h2>Empty.</h2>}
        {currencies.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            {currencies}
          </div>}
      </div>
    )
  }
}

HomePage.propTypes = {
  currencies: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { fetchCurrencies } = state
  const {
    isFetching,
    error,
    lastUpdated,
    items: currencies
  } = fetchCurrencies || {
    isFetching: true,
    items: []
  }

  return {
    currencies,
    isFetching,
    error,
    lastUpdated
  }
}

export default connect(mapStateToProps)(HomePage)