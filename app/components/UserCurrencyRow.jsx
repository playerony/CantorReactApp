import React, { Component } from 'react'

import Round from '../utils/round.js'

class UserCurrencyRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClick } = this.props

        if(this.props.userCurrency.sellPrice == undefined)
            location.reload()

        return (
            <tr>
                <td>{this.props.userCurrency.currencyCode}</td>
                <td>{this.props.userCurrency.sellPrice}</td>
                <td>{this.props.userCurrency.currencyAmount}</td>
                <td>{Round(this.props.userCurrency.sellPrice * 
                           this.props.userCurrency.currencyAmount, 4)}</td>
                <td>
                    <input type="submit" 
                           value="Sell" 
                           className="btn btn-success"
                           onClick={e => onClick(this.props.userCurrency.currencyCode)} />
                </td>
            </tr>
        )
    }
}
export default UserCurrencyRow