import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)

        this.inputeRef = React.createRef()

    }

    focusInput() {
        this.inputeRef.current.focus()
        console.log(this.inputeRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputeRef} />
            </div>
        )
    }
}

export default Input
