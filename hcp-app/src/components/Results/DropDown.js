import React, { useState } from 'react';
import './Results.css';

function DropDown({ onStateSelection, allStatesSelected }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleStateSelection = (event) => {
      onStateSelection(event.target.name, event.target.checked);
  };

  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  const stateElements = usStates.map(state => (
    <div className='state' key={state}>
      <label>
        <input
          className="checkbox-round"
          type='checkbox'
          name={state}
          checked={allStatesSelected}
          onChange={handleStateSelection}
        />
        {state}
      </label>
      <hr className='divider' />
    </div>
  ));

  return (
    <div className='filter'>
      <div>
        <label className='clicker'>Filter by State</label>
        <span onClick={handleOpen} className='triangle'> {open ? '\u25B2' : '\u25BC'}</span>
      </div>

      {open && (
        <div className='dropDown'>
          {stateElements}
        </div>
      )}
    </div>
  );
}

export default DropDown;