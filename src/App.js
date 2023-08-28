import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>超かっこいいカウンターアプリ</h1>
        <p>カウント: {count}</p>
        <button onClick={incrementCount}>カウント増加</button>
      </header>
    </div>
  );
}

export default App;
