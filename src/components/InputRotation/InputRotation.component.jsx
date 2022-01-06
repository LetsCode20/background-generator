import React from 'react';

const InputRotation = ({ rotation, handleChangeRotation }) => {
  return (
    <div>
      <h3>Change Deg of Rotation</h3>
      <input
        type='range'
        min='0'
        max='360'
        value={rotation}
        onChange={handleChangeRotation}
      />
      <p>{rotation ? `${rotation}deg` : '0deg'}</p>
    </div>
  );
};

export default InputRotation;
