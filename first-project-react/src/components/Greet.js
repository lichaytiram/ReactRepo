import React from 'react';

const Greet = props => {

    const { firstName, lastName, children } = props;
    return (

        <div>
            <h1>Hello {firstName} {lastName}</h1>
            {children}
        </div>

    )
}


export default Greet;