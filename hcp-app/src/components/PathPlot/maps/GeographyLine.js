import '../../.././App.css';
import MapChart from './MapChart';

function GeographyLine() {

  return (
    <div className="geography" >
      <MapChart />
      <div name="hr lines" id="hrlines">
        {/* latitude */}
        {/* in order to have curved lines, I needed to use div instead of hr */}
        <div class="chl" style={{ top: '-260px', height: '300px' }} />
        <div class="chl" style={{ top: '-130px', height: '300px' }} />
        <div class="chl" style={{ top: '10px', height: '300px' }} />
        {/* latitude values */}
        <div style={{ textAlign: 'left' }}>
          50ºN
        </div>
        <div style={{ textAlign: 'left', marginTop: '70px' }}>
          40ºN
        </div>
        <div style={{ textAlign: 'left', marginTop: '130px' }}>
          30ºN
        </div>
      </div>

      longitudes 
      <longitudes id="vrlines">
        <div class="vl" style={{ left: '35%', transform: 'rotate(15deg)' }}></div>
        <div class="vl" style={{ left: '41%', transform: 'rotate(8deg)' }}></div>
        <div class="vl" style={{ left: '47.5%', transform: 'rotate(3deg)' }}></div>
        <div class="vl" style={{ left: '54.5%', transform: 'rotate(-4deg)' }}></div>
        <div class="vl" style={{ left: '61%', transform: 'rotate(-9deg)' }}></div>
        <div class="vl" style={{ left: '66%', transform: 'rotate(-16deg)' }}></div>
      </longitudes>
      {/* longitudes values */}
      <div style={{ textAlign: 'left', width: 'inherit', marginTop: '380px', position: 'absolute' }}>
        <span style={{ position: 'relative', marginLeft: '8%' }}>
          120ºN
        </span>
        <span style={{ position: 'relative', marginLeft: '12%' }}>
          110ºN
        </span>
        <span style={{ position: 'relative', marginLeft: '10%' }}>
          100ºN
        </span>
        <span style={{ position: 'relative', marginLeft: '10%' }}>
          90ºN
        </span>
        <span style={{ position: 'relative', marginLeft: '12%' }}>
          80ºN
        </span>
        <span style={{ position: 'relative', marginLeft: '8%' }}>
          70ºN
        </span>

      </div>

    </div>
  );
}

export default GeographyLine;
