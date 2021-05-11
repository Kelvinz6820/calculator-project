import React from "react";
import './Keypad.css'
export default function Keypad(props) {
  return (
    <div>
      <div className="keypad">
            <button className="button-7" onClick={props.displayed} value={7} >7</button>
            <button className="button-8"  onClick={props.displayed} value={8}>8</button>
            <button className="button-9" onClick={props.displayed} value={9}>9</button>
            <button className="button-divisor" onClick={props.handleOperation} value={'/'}>%</button>
            <button className="button-AC" onClick={props.AC} value={0}>AC</button>
            <button className="button-4" onClick={props.displayed} value={4}>4</button>
            <button className="button-5" onClick={props.displayed} value={5}>5</button>
            <button className="button-6" onClick={props.displayed} value={6}>6</button>
            <button className="button-x" onClick={props.handleOperation} value={'*'}>x</button>
            <button className="button-1" onClick={props.displayed} value={1}>1</button>
            <button className="button-2" onClick={props.displayed} value={2}>2</button>
            <button className="button-3" onClick={props.displayed} value={3}>3</button>
            <button className="button-subtract" onClick={props.handleOperation} value={'-'}>-</button>
            <button className="button-0" onClick={props.displayed} value={0}>0</button>
            <button className="button-dot" onClick={props.displayed} value={'.'}>.</button>
            <button className="button-sign-change" onClick={props.signChange} value={'-'}>+/-</button>
            <button className="button-plus" onClick={props.handleOperation} value={'+'}>+</button>
            <button className="button-eq" onClick={props.equal} value={'='}>=</button>
      </div>
    </div>
  );
}

