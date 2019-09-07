import React from 'react'
import './MyStyle.css'
import myPrivateStyle from './style.module.css'

function StyleSheet() {

    let blueColor = {
        color: 'blue'
    }

    return (
        <div>
            <h2 className='primary size'>StyleSheet</h2>
            <h2 style={blueColor}>In Line</h2>
            <h2 className={myPrivateStyle.myModule}>Module CSS</h2>
        </div>
    )
}

export default StyleSheet
