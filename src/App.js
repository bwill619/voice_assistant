import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='voice-header'>Voice Assistant</h1>
        <p className='App-paragraph'>
          This will be the voice assistant app.
        </p>
      </header>
    </div>
  );
}

export default App;
