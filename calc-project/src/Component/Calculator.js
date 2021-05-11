

import Input from './Input'
import Results from './Results'
import React, { Component } from 'react'
import Keypad from './Keypad'
import numeral from 'numeral'
import './Calculator.css'
class Calculator extends Component {
    constructor(){
        super()
        this.state = {
            previousResult: '', //when clicking 
            operation: '',
            savedInput: '',
            result: 0,
            display: '',
        }
    }
    stringToNumberConverter(string) {
        if (typeof string === 'number') {
            return string
        }
        else {
            let stringArray = string.split(',')
            let noComma = stringArray.join('')
            let numberAnswer = parseFloat(noComma)
            console.log(numberAnswer)
            return numberAnswer
        }

        


    }

    signChange = () => {
        this.setState({
            display: (this.stringToNumberConverter(this.state.display) * (-1)).toString()
        })
    }
    AC = () => {
        this.setState({
            display: '',
            result: 0,
            previousResult: '',
            operation: '',
            savedInput: ''
        })
    }
    equal = () => {
        if (this.state.display === ''){
            alert('Please type an input and another operation first!')
        }
        else if (this.state.operation === '+'){
            this.setState({
                result: numeral(this.stringToNumberConverter(this.state.previousResult) + this.stringToNumberConverter(this.state.display)).format('0,0'),
                savedInput: this.state.display,
                previousResult: this.stringToNumberConverter(this.state.previousResult) + this.stringToNumberConverter(this.state.display),
                display: ''
            })
        }
        else if (this.state.operation === '-') {
            this.setState({
                result: numeral(this.stringToNumberConverter(this.state.previousResult) - this.stringToNumberConverter(this.state.display)).format('0,0'),
                savedInput: this.state.display,
                previousResult: this.stringToNumberConverter(this.state.previousResult) - this.stringToNumberConverter(this.state.display),
                display: '',
            })
        }
        else if (this.state.operation === '*'){
            this.setState({
                result: numeral(this.stringToNumberConverter(this.state.previousResult) * this.stringToNumberConverter(this.state.display)).format('0,0'),
                savedInput: this.state.display,
                previousResult: this.stringToNumberConverter(this.state.previousResult) * this.stringToNumberConverter(this.state.display),
                display: '',
            })
        }
        else if (this.state.operation === '/'){
            this.setState({
                result: numeral(Math.round(this.stringToNumberConverter(this.state.previousResult) / this.stringToNumberConverter(this.state.display))).format('0,0'),
                savedInput: this.state.display,
                previousResult: Math.round(this.stringToNumberConverter(this.state.previousResult) / this.stringToNumberConverter(this.state.display)),
                display: '',
            })
        }
    }
    handleOperation = (event) => {
        //previousResult is too make sure the initial input is displayed on results
        if(this.state.previousResult === '' && this.state.result === 0) {
            this.setState({
                result: numeral(this.state.display).format('0,0'),
                previousResult: this.state.display,
                savedInput: this.state.display,
                display: '',
                operation: event.target.value
            })

        }
        else if (event.target.value === '+' && this.state.display === ''){
            alert('Please type an input first!')
        }
        else if (event.target.value === '-' && this.state.display === ''){
            alert('Please type an input first!')
        }
        else if (event.target.value === '*' && this.state.display === ''){
            alert('Please type an input first!')
        }
        else if (event.target.value === '/' && this.state.display === ''){
            alert('Please type an input first!')
        }
        
        else if (event.target.value === '+'){
            this.setState({
                result: numeral(this.stringToNumberConverter(this.state.previousResult) + this.stringToNumberConverter(this.state.display)).format('0,0'),
                previousResult: this.stringToNumberConverter(this.state.previousResult) + this.stringToNumberConverter(this.state.display),
                savedInput: this.state.display,
                display: '',
                operation: event.target.value
            })
        }
        else if (event.target.value === '-'){
            this.setState({
                result: numeral(this.stringToNumberConverter(this.state.previousResult) - this.stringToNumberConverter(this.state.display)).format('0,0'),
                previousResult: this.stringToNumberConverter(this.state.previousResult) - this.stringToNumberConverter(this.state.display),
                savedInput: this.state.display,
                display: '',
                operation: event.target.value
            })
        }
        else if (event.target.value === '*'){
            console.log(this.state.previousResult)
            console.log(this.state.display)
            this.setState({

                result: numeral(this.stringToNumberConverter(this.state.previousResult) * this.stringToNumberConverter(this.state.display)).format('0,0'),
                previousResult: this.stringToNumberConverter(this.state.previousResult) * this.stringToNumberConverter(this.state.display),
                savedInput: this.state.display,
                display: '',
                operation: event.target.value
            })
        }
        else if (event.target.value === '/'){
            
            this.setState({
                result: numeral(Math.round(this.stringToNumberConverter(this.state.previousResult) / this.stringToNumberConverter(this.state.display))).format('0,0'),
                previousResult: Math.round(this.stringToNumberConverter(this.state.previousResult) / this.stringToNumberConverter(this.state.display)),
                savedInput: this.state.display,
                display: '',
                operation: event.target.value
            })
        }
    }
    displayed = (event) => {
        
        if(this.state.display.includes('.') && event.target.value === '.'){
            alert('Invalid input')
        }
        else if (this.state.display === '' && event.target.value === '0'){
            this.setState({display: this.state.display.concat('')})
        }
        else if (event.target.value === '.') {
            this.setState({display: this.state.display.concat(event.target.value)})
        }
        else if (this.state.display.includes('.')) {
            this.setState({display: this.state.display.concat(event.target.value)})
        }
        else {
            
            this.setState({display: numeral(this.state.display.concat(event.target.value)).format('0,0')})
            
 
            
        }
    }


    render() {
        return (
        <div className="App">
            <Results result={this.state.result}/>
            <Input display={this.state.display}/>
            <Keypad 
            displayed={this.displayed}
            AC={this.AC}
            handleOperation={this.handleOperation}
            signChange={this.signChange}
            equal={this.equal}
            />
        </div>
        )
    }
}
export default Calculator;
