import React, { useState } from "react";
import './VariableSetter.css';

function VariableSlider2(props) {
    const [numberValue, setNumberValue] = useState(50);{/**
according to the figma it looks like everything should start from the middle so we may ahve
to change the value passed in useState to like a prop which points to the initial value depending on the
backend people */}

    return (
        <div>
            <label htmlFor="title" className="title">{props.title}</label>
            <br /><br />
            <label htmlFor="value" id="initialValue">{numberValue} {props.units}</label>
            <br /><br />
            <input type="range" step={props.step} onChange={(prevNumber) => setNumberValue(prevNumber.target.value)}/>
        </div>
    );
}

export default VariableSlider2;