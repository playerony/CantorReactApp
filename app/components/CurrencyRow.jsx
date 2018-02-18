import React, { Component } from 'react'

class CurrencyRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClick } = this.props

        return (
            <tr>
                <td>{this.props.currency.code}</td>
                <td>{this.props.currency.unit}</td>
                <td>{this.props.currency.purchasePrice}</td>
                <td>
                    <input type="submit" 
                           value="Buy" 
                           className="btn btn-success"
                           onClick={e => onClick(this.props.currency.code)} />
                </td>
            </tr>
        )
    }
}
export default CurrencyRow