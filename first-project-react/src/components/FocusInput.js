import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    constructor(props) {
        super(props)

        this.parentRef = React.createRef()

    }

    handlerRef = () => {

        this.parentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <Input ref={this.parentRef} />
                <button onClick={this.handlerRef} >click me</button>
            </div>
        )
    }
}

export default FocusInput
