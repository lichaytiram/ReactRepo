import React, { Component } from 'react'

class RegComponent extends Component {

    // to make it as Pure comp
    // shouldComponentUpdate(){
    //     return false
    // }

    render() {

        console.log('Regular Component');
        return <h3>Regular Component {this.props.name}</h3>

    }
}

export default RegComponent
