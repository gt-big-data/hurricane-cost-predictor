import './App.css';
import VariableSetter from './components/VariableSet/VariableSetter';
import Results from './components/Results/Results';
import PathPlotter from './components/PathPlot/PathPlotter'

function App() {
  return (
    <div className="App">
        <div className='Title'>
          <h4>Hurricane Cost Predictor</h4>
          <p>Welcome to our predictor app. This was made by Georgia Tech students in the Big Data Club. Our algorithm takes in multiple inputs and a path to determine lost trade from road destruction due to the given hurricane. A hurricane is genrated by filling the inputs in each field and creating a path that your hurricane will take. </p>
        </div>
        <div className="VariableSetter">
          <VariableSetter />
        </div>
        <div className="PathPlotter">
          <PathPlotter />
        </div>
        <div className="Results">
          <Results />
        </div>
    </div>
  );
}

export default App;
