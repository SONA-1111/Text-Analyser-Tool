// import React, { useState } from 'react';
// import './index.scss'
// const TextArea = () => {
 

//   return (
//     <textarea className="text-area" placeholder="Paste your text here..." />
//   )
// }

// export default TextArea


import React from 'react';
import './index.scss';

const TextArea = ({ onTextChange }) => {
  return <textarea className="text-area" placeholder="Paste your text here..." onChange={onTextChange} />;
};

export default TextArea;
