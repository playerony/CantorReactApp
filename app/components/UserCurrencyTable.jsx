import React, { Component } from 'react'
import UserCurrencyRow from './UserCurrencyRow.jsx'

class UserCurrencyTable extends Component {
    constructor(props){
        super(props);
    }

    render() {
        var userCurrencies = this.props.userCurrencies.map(userCurrency => 
            <UserCurrencyRow key = {userCurrency.currencyCode} 
                             userCurrency = {userCurrency}
                             onClick = {this.props.onClick} />
        );

        return(
            <table className="table center table-bordered">
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Unit price</th>
                        <th>Amount</th>
                        <th>Value</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userCurrencies}
                </tbody>
            </table>
        )
    }
}
export default UserCurrencyTable