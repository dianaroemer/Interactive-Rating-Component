import './App.scss';
import './Components/InteractiveRatingComponent';
import InteractiveRatingComponent from './Components/InteractiveRatingComponent';

function App() {
  return (
    <main className="App">

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