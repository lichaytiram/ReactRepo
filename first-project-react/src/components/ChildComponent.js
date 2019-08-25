import React from 'react'

function ChildComponent(props) {

    const { handler } = props;

    return (
        <div>
            <button onClick={handler}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
