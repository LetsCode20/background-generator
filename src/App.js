import React, { useState } from 'react';
import './app.css';

function App() {
  const [color, setColor] = useState('#09c4dc');
  const [rgb, setRgb] = useState('9, 196, 220');
  const [color1, setColor1] = useState('#eaf6f3');
  const [rgb1, setRgb1] = useState('234, 246, 243');
  const [rotation, setRotation] = useState(0);
  const [copySuccess, setCopySuccess] = useState('');

  const handleChangeColor = (e) => {
    setColor(e.target.value);
    setRgb(hexToRgb(e.target.value));
  };

  const handleChangeColor1 = (e) => {
    setColor1(e.target.value);
    setRgb1(hexToRgb(e.target.value));
  };

  const handleChangeRotation = (e) => {
    setRotation(e.target.value);
  };

  // const copyToClipboard = () => {};

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return r + ',' + g + ',' + b; //return 23,14,45 -> reformat if needed
    }
    return null;
  };

  return (
    <div className='app'>
      <h2>Background Generator</h2>

      <div className='flex inputs'>
        <div>
          <input type='color' value={color} onChange={handleChangeColor} />
          <p>HEX: {color ? color : '#000000'}</p>
          <p>RGB: {rgb ? `rgb(${rgb})` : ''}</p>
        </div>

        <div>
          <input type='color' value={color1} onChange={handleChangeColor1} />
          <p>HEX: {color1 ? color1 : '#000000'}</p>
          <p>RGB: {rgb1 ? `rgb(${rgb1})` : ''}</p>
        </div>

        <div>
          <input
            type='range'
            min='0'
            max='360'
            value={rotation}
            onChange={handleChangeRotation}
          />
          <p>{rotation ? `${rotation}deg` : '0deg'}</p>
        </div>
      </div>

      <div
        className='flex result'
        style={{
          background: `linear-gradient(${rotation}deg, ${color} 0%, ${color1} 100%)`,
        }}
      ></div>

      <div
        className='flex css-result'
        onClick={navigator.clipboard.writeText('Copy this text to clipboard')}
      >
        <div>
          <h2>Copy to clipboard</h2>
          <p>
            background: rgb({rgb});
            <br />
            background: linear-gradient({rotation}deg, rgb({rgb}) 0%, rgb({rgb1}
            ) 100%)
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
