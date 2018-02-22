import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import {
    Switch,
    Route
} from 'react-router-dom'

import HomePage from './HomePage.jsx'
import NavigationBar from './NavigationBar.jsx'
import LoginPage from './LoginPage.jsx'

const store = configureStore()

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <NavigationBar />
                    
                    <div>
                        <Switch>
                            <Route exact path='/' component={LoginPage}/>
                            <Route path='/home' component={HomePage}/>
                        </Switch>
                    </div>
                </div>
            </Provider>
        )
    }
}
export default Root;