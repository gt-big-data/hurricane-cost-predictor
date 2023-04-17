import React, { useState } from 'react';
import NumberCard from './NumberCard';
import DropDown from './DropDown';
import DropDown2 from './DropDown2';
import PieChart from './PieChart';
import './Results.css';

function Transition() {
  const [showResults, setShowResults] = useState(false);
  const [selectedStates, setSelectedStates] = useState([]);
  const [allStatesSelected, setAllStatesSelected] = useState(false);
  const [selectedCostType, setSelectedCostType] = useState('Traffic Caused');

  const handleStateSelection = (state, isSelected) => {
    if (isSelected) {
      setSelectedStates([...selectedStates, state]);
    } else {
      setSelectedStates(selectedStates.filter((s) => s !== state));
    }
  };

  const handleCostTypeSelection = (costType) => {
    setSelectedCostType(costType);
  };

  const handleClick = () => {
    setShowResults(true);
    setAllStatesSelected(true);
    setSelectedStates(usStates);
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

  return (
    <div className='transition'>
      {!showResults && (
        <button className='btn' onClick={handleClick}>
          Calculate
        </button>
      )}

      {showResults && (
        <div>
          <div className='results-container'>
            <DropDown onStateSelection={handleStateSelection} allStatesSelected={allStatesSelected} />
            <DropDown2 onCostTypeSelection={handleCostTypeSelection} selectedCostType={selectedCostType} />
          </div>
          <div className='results-container results-container2'>
            <NumberCard selectedCostType={selectedCostType} />
            <PieChart selectedStates={selectedStates} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Transition;