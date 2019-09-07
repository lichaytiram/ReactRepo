import React, { Component } from 'react'

let redColor = {
    color: 'red'
}

class Forms extends Component {



    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUserNameChange = event => {
        this.setState({
            userName: event.target.value
        })
    }
    handleTextAreaChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    handleForm = event => {
        alert(`${this.state.userName} ,${this.state.comments} ,${this.state.topic}`)
        event.preventDefault()
    }

    render() {

        const { userName, comments, topic } = this.state

        return (
            <form onSubmit={this.handleForm}>
                <div>
                    <label>user name </label>
                    <input type="text" value={userName} onChange={this.handleUserNameChange} />
                </div>

                <div>
                    <label>comments </label>
                    <textarea value={comments} onChange={this.handleTextAreaChange} />
                </div>
                <div>
                    <label>topics </label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="React">React</option>
                        <option value="Java">Java</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>
                <button type="submit" style={redColor}>submit one way</button>
                <button onClick={this.handleForm} style={redColor}>submit two way</button>
            </form>
        )
    }
}

export default Forms
