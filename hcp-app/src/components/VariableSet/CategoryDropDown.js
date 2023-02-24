import React, { PureComponent, useState} from 'react';
import './VariableSetter.css';


function CategoryDropDown() {
  const [chosenValue, setChosenValue] = useState(1);
    return (
      <div>
        <select name="hurricaneCategory" id="hurricaneCategory">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
        </select>
      </div>
      );
}

export default CategoryDropDown;