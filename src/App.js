import React from 'react';
import './App.css';
import VideoChat from './VideoChat';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Chat with Hooks</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Made with {' '}
          <span role="img" aria-label="React">
            *
          </span>{' '}
          by <a href="https://twitter.com/manateeidol">Ben Miriello</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
