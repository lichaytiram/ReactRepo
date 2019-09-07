import React from 'react'

function Person({ person }) {

    const { id, name, age } = person

    return (
        <div>
            <h2>id - {id} , my name is {name} and i am {age} years old</h2>
        </div>
    )
}

export default Person
