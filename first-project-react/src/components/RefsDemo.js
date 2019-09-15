import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)

        this.inputeRef = React.createRef()

        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }

    }

    // one way
    componentDidMount() {
        this.inputeRef.current.focus()
        console.log(this.inputeRef);
    }

    // clickHandler = () => {
    //     alert(this.inputeRef.current.value)
    // }

    // two way
    // componentDidMount() {
    //     if (this.cbRef)
    //         this.cbRef.focus()
    // }

    clickHandler = () => {
        alert(this.cbRef.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputeRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default RefsDemo
