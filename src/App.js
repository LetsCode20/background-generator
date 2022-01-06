import React, { useState } from 'react';
import './app.css';

function App() {
  const [color, setColor] = useState('#ff0905');
  const [color1, setColor1] = useState('#fe76fe');

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setColor(e.target.value);
  };

  const handleChange1 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setColor1(e.target.value);
  };

  return (
    <div className='app'>
      <h2>Background Generator</h2>

      <div className='container inputs'>
        <input type='color' value={color} onChange={handleChange} />
        <p>{color ? color : '#000000'}</p>

        <input type='color' value={color1} onChange={handleChange1} />
        <p>{color1 ? color1 : '#000000'}</p>
      </div>

      <div
        className='container result'
        style={{
          background: `linear-gradient(to bottom, ${color}, ${color1})`,
        }}
      ></div>
    </div>
  );
}

export default App;
