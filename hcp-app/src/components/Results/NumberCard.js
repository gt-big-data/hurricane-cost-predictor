import React, { PureComponent, useState } from 'react';
import './Results.css';

function NumberCard({ selectedCostType }) {
    const [ecoCost,setEcoCost] = useState(getNumber(1234567829289))
    let x = 125000;
    const [traffic,setTraffic] = useState(x.toLocaleString())
    const percentageDamaged = "12%";
    return (
        <div className='NumberCard'>
        <p id='economicCost'>Total Economic cost:</p>
        <p className='Numbers'>${ecoCost}</p>
        <hr />

        {selectedCostType === 'Traffic Caused' && (
            <>
            <p>Traffic Caused:</p>
            <p className='Numbers' id='traffic'>{traffic}</p>
            <p id='carsBlocked'>cars blocked</p>
            </>
        )}

        {selectedCostType === 'Percentage Damaged' && (
            <>
            <p>Percentage Damaged:</p>
            <p className='percentage' id='percentageDamaged'>{percentageDamaged}</p>
            </>
        )}
        </div>
    );
}

let getNumber = function(num) {
  var units = ["M","B","T","Q"]
  var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
  var r = unit%3
  var x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2)
  if (unit<6){
    return num
  } else {
    return x.toFixed(2)+ ' ' + units[Math.floor(unit / 3) - 2]
  }
}

export default NumberCard;