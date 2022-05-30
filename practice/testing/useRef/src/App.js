import React, { useState, useEffect, useRef } from 'react';
import './app.css';

const App = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div className='app'>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My Name is {name} and it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default App;
