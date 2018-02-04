import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import HomePage from './HomePage.jsx'

const store = configureStore()

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    )
  }
}
export default Root;