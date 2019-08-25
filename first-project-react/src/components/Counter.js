import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.incrementFive = this.incrementFive.bind(this);
    }

    increment() {

        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log("Call back value: " + this.state.count) })

        this.setState(

            (preState, props) => ({
                count: preState.count + parseInt(props.addValue)
            }),
            () => { console.log("Call back value: " + this.state.count) }
        )

        // console.log(this.state.count)
    }

    incrementFive() {

        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <p> Count - {this.state.count} </p>

                <button onClick={() => this.incrementFive()}>Increment x 5 times</button>
                <button onClick={this.incrementFive}>Increment x 5 times</button>
            </div>
        )
    }
}

export default Counter
