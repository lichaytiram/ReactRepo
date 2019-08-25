import React from 'react';

const Jsx = () => {
    // return (
    //     <div>
    //         <h1>hi</h1>
    //         {console.log("hi2")}

    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h1', null, 'hi'))
}

export default Jsx;