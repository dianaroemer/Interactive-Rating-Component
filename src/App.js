import logo from './logo.svg';
import './App.scss';
import './Components/InteractiveRatingComponent';
import InteractiveRatingComponent from './Components/InteractiveRatingComponent';

function App() {
  return (
    <main className="App">
      {/* <header className="App-header">
        // {/* <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div id='page-container'>
        <div id='content-wrap'>
          <h1 className="sr-only">Interactive Rating Component</h1>

          <InteractiveRatingComponent/>    
        </div>
        <footer className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
          Coded by <a href="https://github.com/dianaroemer">Diana Roemer</a>.
        </footer>
      </div>
      

    </main>

    

  );
}

export default App;
