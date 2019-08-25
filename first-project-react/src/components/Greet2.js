import React from 'react';

const Greet2 = props => {

    console.log(props.name);
    
    return (
        <h1>Hello {props.name}</h1> 
    )

}

export default Greet2;