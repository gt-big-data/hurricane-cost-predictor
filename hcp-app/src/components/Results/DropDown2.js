import React, { useState } from 'react';
import './Results.css';

function DropDown2({ onCostTypeSelection, selectedCostType }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const typeCost = [
    "Traffic Caused",
    "Percentage Damaged",
  ];

  const handleCostTypeSelection = (event) => {
    onCostTypeSelection(event.target.value);
  };

  const stateElements = typeCost.map((cost, index) => (
    <div className='cost' key={cost}>
      <label>
        <input
          className="radio-round"
          type='radio'
          value={cost}
          name="costType"
          checked={selectedCostType === cost}
          onChange={handleCostTypeSelection}
        />
        {cost}
      </label>
      <hr className='divider' />
    </div>
  ));

  return (
    <div>
      <div className='dropdown'>
        <label className="clicker clicker-cost">Total Cost</label>
        <span onClick={handleOpen} className='triangle'> {open ? '\u25B2' : '\u25BC'}</span>
      </div>

      {open && (
        <div className='dropDown cost-dropdown'>
          {stateElements}
        </div>
      )}
    </div>
  );
}

export default DropDown2;