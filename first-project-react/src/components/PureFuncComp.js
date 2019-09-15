import React from 'react'

function PureFuncComp({ name }) {

    console.log('Pure Function Component');
    return <h3>Pure Function Component {name} </h3>

}

export default React.memo(PureFuncComp) 
