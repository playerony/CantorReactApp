import React, { Component } from 'react'
import CurrencyRow from './CurrencyRow.jsx'

class CurrencyTable extends Component {
    constructor(props){
        super(props);
    }

    render() {
        var currencies = this.props.currencies.map(currency => 
            <CurrencyRow key = {currency.code} 
                         currency = {currency}
                         onClick = {this.props.onClick} />
        );

        return(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Unit</th>
                        <th>Value</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currencies}
                </tbody>
            </table>
        )
    }
}
export default CurrencyTable