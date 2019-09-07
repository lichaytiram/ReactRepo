import React, { Component } from 'react'

class Conditional extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedId: false
        }
    }

    // first approach
    // render() {

    //     let message
    //     if (this.state.isLoggedId)
    //         message = <h1>Welcome Lichay</h1>
    //     else
    //         message = <h1>Welcome Guest</h1>
    //     return (
    //         <div>
    //             {message}
    //         </div>
    //     )
    // }

    // second approach
    render() {

        return this.state.isLoggedId ? <h1>Welcome Lichay</h1> : <h1>Welcome Guest</h1>

    }
}

export default Conditional
