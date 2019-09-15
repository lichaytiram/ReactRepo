import React, { Component } from 'react'
import FRInput from './FRInput'

class RFParentInput extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    handlerRed = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.handlerRed}>Focus Input</button>
            </div>
        )
    }
}

export default RFParentInput
