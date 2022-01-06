import React, { useState } from 'react';
import './app.css';
import CopyClipboard from './components/CopyClipboard/CopyClipboard.component';
import GradientBackground from './components/GradientBackground/GradientBackground.component';
import InputColor from './components/InputColor/InputColor.component';
import InputRotation from './components/InputRotation/InputRotation.component';

function App() {
  const [color1, setColor1] = useState('#09c4dc');
  const [rgb1, setRgb1] = useState('9, 196, 220');
  const [color2, setColor2] = useState('#eaf6f3');
  const [rgb2, setRgb2] = useState('234, 246, 243');
  const [rotation, setRotation] = useState(0);

  const handleChangeColor1 = (e) => {
    setColor1(e.target.value);
    setRgb1(hexToRgb(e.target.value));
  };

  const handleChangeColor2 = (e) => {
    setColor2(e.target.value);
    setRgb2(hexToRgb(e.target.value));
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
        <InputColor
          rgb={rgb1}
          color={color1}
          handleChangeColor={handleChangeColor1}
        />

        <InputColor
          rgb={rgb2}
          color={color2}
          handleChangeColor={handleChangeColor2}
        />

        <InputRotation
          rotation={rotation}
          handleChangeRotation={handleChangeRotation}
        />
      </div>

      <GradientBackground rotation={rotation} color1={color1} color2={color2} />

      <CopyClipboard rgb1={rgb1} rgb2={rgb2} rotation={rotation} />
    </div>
  );
}

export default App;
