import React from 'react'
// import Person from './Person';

function List() {

    let names = ["Lichay", "Dor", "shlomi", "Dor"]
    let newNames = names.map((name, index) => <h2 key={index}> {name}</h2>)

    return <div> {newNames} </div>

    // Object
    // let persons = [
    //     {
    //         id: 1,
    //         name: 'Lichay',
    //         age: 26
    //     }
    //     ,
    //     {
    //         id: 2,
    //         name: 'Dor',
    //         age: 27
    //     }
    //     ,
    //     {
    //         id: 3,
    //         name: 'Maor',
    //         age: 25
    //     }
    // ]

    // const myFullList = persons.map(person => <Person key={person.id} person={person} />)

    // return (<div>{myFullList}</div>)

}

export default List
