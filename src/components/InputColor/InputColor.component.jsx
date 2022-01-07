import React from 'react';

const InputColor = ({ rgb, color, handleChange }) => {
  return (
    <div>
      <input type='color' value={color} onChange={handleChange} />
      <p>HEX: {color ? color : '#000000'}</p>
      <p>RGBA: {rgb ? `rgb(${rgb}, 1)` : ''}</p>
    </div>
  );
};

export default InputColor;
