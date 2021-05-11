import React, { Component } from 'react'
import './Input.css'
export default class Results extends Component {
    render() {
        return (
            <div className='input-container'>
                <h1>{this.props.display}</h1>
            </div>
        )
    }
}
