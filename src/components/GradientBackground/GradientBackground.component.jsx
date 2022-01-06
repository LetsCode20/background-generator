import React from 'react';

const GradientBackground = ({ rotation, color1, color2 }) => {
  return (
    <div
      className='flex result'
      style={{
        background: `linear-gradient(${rotation}deg, ${color1} 0%, ${color2} 100%)`,
      }}
    ></div>
  );
};

export default GradientBackground;
