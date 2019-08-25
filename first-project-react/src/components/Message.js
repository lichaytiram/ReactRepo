import React, { Component } from 'react';

class Message extends Component {


    constructor() {
        super();
        this.state = {
            name: "Welcome visitor"
        }
    }

    subscribe() {

        this.setState({
            name: "You are subscribed"
        });
    }

    render() {

        return (
            <div>

                <h1>{this.state.name}</h1>
                <button onClick={() => this.subscribe()}>subscribe</button>
            </div >
        )
    }

}

export default Message;