import React from 'react'

function Columns() {

    const names = [
        {
            id: 1,
            name: 'Lichay'
        },
        {
            id: 2,
            name: 'Omer'
        },
        {
            id: 3,
            name: 'Tomer'
        }
    ]

    return (

        <>
            <td>First</td>
            <td>Second</td>
            {
                names.map(name =>
                    <td key={name.id}>
                        <h2>{name.name}</h2>
                        <p>h2</p>
                    </td>)

            }

        </>
    )
}

export default Columns
