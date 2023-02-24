import React from 'react';
import CategoryDropDown from './CategoryDropDown';
import VariableSlider from './VariableSlider';
import VariableSlider2 from './VariableSlider2';

function VariableSetter() {
    return ( 
    <div>
        <br />
        <br />
        <h4 className='VariableName'>Set Variables</h4>
        <div>
            <form action="">
                <label htmlFor="hurricaneCategory" className='title'>Hurricane Category</label>
                <br />
                <br />
                <br />
                <CategoryDropDown/>
                <br />
                <br />
                <br />
                <VariableSlider2 title='Rainfall' units='mm'/>
                <br />
                <br />
                <br />
                <VariableSlider2 title='Wind Speeds' units='mph' />
                <br /><br /><br />
                <VariableSlider2 title="Wave Height" units="m" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </form>
        </div>
    </div> 
    );
}

export default VariableSetter;