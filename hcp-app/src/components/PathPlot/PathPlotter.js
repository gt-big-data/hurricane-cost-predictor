import React, { PureComponent } from 'react';
import Map from './maps/Map';
import Legend from './Legend'
import PathVector from './PathVector'
import PlotCircle from './PlotCircle'
function PathPlotter() {
    return ( 
    <div>
        <span>2. Plot Path</span>
        <Map/>
        
        <Legend/>
        <PathVector/>
        <PlotCircle/>
        
    </div> );
}

export default PathPlotter;