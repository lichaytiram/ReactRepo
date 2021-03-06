import React, { Component } from 'react'
import RegComponent from './RegComponent'
import PureComp from './PureComp'
import RegFuncComponent from './RegFuncComponent'
import PureFuncComp from './PureFuncComp'

class ParentComponentV2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Lichay'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(preState => ({
                name: preState.name // can add somting to update pure comp
            })
            )
        }, 2000)
    }

    render() {
        console.log('---------------Parent Component---------------');
        return (
            <div>
                <RegComponent name={this.state.name} />
                <PureComp name={this.state.name} />
                <RegFuncComponent name={this.state.name} />
                <PureFuncComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponentV2
