import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);

    }

    greetParent(childValue) {
        alert(`hello ${this.state.parentName} , ${childValue}`);
    }

    render() {
        return (
            <div>
                <ChildComponent handler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
