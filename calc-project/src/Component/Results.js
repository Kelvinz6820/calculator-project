import React, { Component } from 'react'
import './Results.css'
export default class Results extends Component {
    render() {
        return (
            <div className='result-container'>
                <h1>{this.props.result}</h1>
            </div>
        )
    }
}
