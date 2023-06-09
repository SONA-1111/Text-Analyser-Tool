import React from 'react';
import './index.scss';

const BottomResultBox = ({ averageReadingTime, longestWord }) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: averageReadingTime,
    },
    {
      title: 'Longest word:',
      value: longestWord,
    },
  ];

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomResultBox;
