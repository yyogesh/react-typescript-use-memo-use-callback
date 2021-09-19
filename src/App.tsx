import React from 'react';
import './App.css';
import Memo1 from './components/Memo1';
import MemoCount from './components/MemoCount';
import Pokemon from './components/Pokemon';

const App: React.FC = () => {
  return (
    <div className="App">
      <Memo1 />
      <MemoCount />
      <Pokemon />
    </div>
  );
}

export default App;
