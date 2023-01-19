import './app.css';
import McAudioGraph from './components/mc-audio-graph';

function App() {
  return (
    <div className="app">
      <header className="header">
        <p className="title">mc-audio-graph</p>
        <McAudioGraph />
      </header>
    </div>
  );
}

export default App;
