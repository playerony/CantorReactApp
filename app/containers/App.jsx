import React, { Component } from 'react'
import Root from './Root.jsx'
import {
    BrowserRouter
} from 'react-router-dom';
import NavigationBar from './NavigationBar.jsx';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        )
    }
}
export default App