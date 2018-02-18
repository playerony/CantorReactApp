import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

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
                    
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/login' component={LoginPage}/>
                    </Switch>
                </div>
            </Provider>
        )
    }
}
export default Root;