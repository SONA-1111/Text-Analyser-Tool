// import React from 'react'
// import './index.scss'
// const ResultBox = () => {
//   const resultBar = [
//     {
//       title: 'Words',
//       value: 0,
//     },
//     {
//       title: 'Characters',
//       value: 0,
//     },
//     {
//       title: 'Sentences',
//       value: 0,
//     },
//     {
//       title: 'Paragraphs ',
//       value: 0,
//     },
//     {
//       title: 'Pronouns',
//       value: 0,
//     },
//   ]
//   return (
//     <div className="result-bar">
//       {resultBar.map(({ title, value }) => (
//         <div className="result-box" key={title}>
//           <span className="box-title">{title}</span>
//           <span className="box-value">{value}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ResultBox;





import React from 'react';
import './index.scss';

const ResultBox = ({ wordCount, characterCount, sentenceCount, paragraphCount, pronounCount }) => {
  const resultBar = [
    {
      title: 'Words',
      value: wordCount,
    },
    {
      title: 'Characters',
      value: characterCount,
    },
    {
      title: 'Sentences',
      value: sentenceCount,
    },
    {
      title: 'Paragraphs',
      value: paragraphCount,
    },
    {
      title: 'Pronouns',
      value: pronounCount,
    },
  ];

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ResultBox;
