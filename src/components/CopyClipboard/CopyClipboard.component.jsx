import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import * as Hi from 'react-icons/hi';

const CopyClipboard = ({ rgb1, rgb2, rotation }) => {
  const [isCopied, setIsCopied] = useState(false);
  const textClipboard = `
      background: rgb(${rgb1});
      background: linear-gradient(${rotation}deg, rgba(${rgb1}, 1) 0%, rgba(${rgb2}, 1 ) 100%);
  `;

  const handleCopy = () => {
    setIsCopied(true);
  };

  useEffect(() => {
    setTimeout(() => setIsCopied(false), 2000);
  }, [isCopied]);

  return (
    <CopyToClipboard text={textClipboard} onCopy={handleCopy}>
      <div className='flex css-result'>
        <div>
          {isCopied ? (
            <span style={{ color: 'green' }}>Successful Copy!</span>
          ) : null}
          <h2>
            Copy to Clipboard{' '}
            <span>
              <Hi.HiOutlineClipboardCopy />
            </span>
          </h2>
          <p>
            background: rgb({rgb1});
            <br />
            background: linear-gradient({rotation}deg, rgba({rgb1}, 1) 0%, rgba(
            {rgb2}, 1 ) 100%);
          </p>
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default CopyClipboard;
