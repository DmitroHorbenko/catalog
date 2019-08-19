import React, {Component} from 'react';

export default class Header extends Component{

    render() {
        return <h1>Cart: {this.props.cart.length}</h1>
    }
}