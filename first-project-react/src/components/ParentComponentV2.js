import React, { Component } from 'react'

class ParentComponentV2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Lichay'
        }
    }

    componentDidMount() {
        setInterval(() => { }, 2000)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default ParentComponentV2
