import React, { useState } from 'react';
import ResultBox from './ResultBox';
import TextArea from './TextArea';
import BottomResultBox from './BottomResultBox';

const MainLogic = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [pronounCount, setPronounCount] = useState(0);
  const [averageReadingTime, setAverageReadingTime] = useState('~');
  const [longestWord, setLongestWord] = useState('-');

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    if (newText.trim() === '') {
      setWordCount(0);
      setCharacterCount(0);
      setSentenceCount(0);
      setParagraphCount(0);
      setPronounCount(0);
      setAverageReadingTime('~');
      setLongestWord('-');
    } else {
      countWords(newText);
      countCharacters(newText);
      countSentences(newText);
      countParagraphs(newText);
      countPronouns(newText);
      calculateAverageReadingTime(newText);
      findLongestWord(newText);
    }
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/g);
    setWordCount(words.length || 0); // Update with 0 if no words
  };

  const countCharacters = (text) => {
    setCharacterCount(text.length);
  };
 
  const countSentences = (text) => {
    const sentences = text.trim().split(/[.|!|?]\s/gi);
    setSentenceCount(sentences.length || 0); // Update with 0 if no sentences
  };
  // (/[.!?]+/g)
  const countParagraphs = (text) => {
    const paragraphs = text.trim().split(/(?<=[?!\n])\s*/);
    setParagraphCount(paragraphs.length || 0); // Update with 0 if no paragraphs
  };
  // '\n\n'
  const countPronouns = (text) => {
    const pronouns = text.match(/\b(he|she|it|they|we|you|I|ourselves|yourselves|themselves|hers|himself|itself|his|theirs|myself|yourself|herself|me|mine|yours|ours|him|her|us|them)\b/ig);
    setPronounCount(pronouns ? pronouns.length : 0);
  };

  const calculateAverageReadingTime = (text) => {
    // Assuming average reading speed of 200 words per minute
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    const minutes = Math.ceil(wordCount / 225);
    let timeString = '';
    if (minutes === 1) {
      timeString = `~ ${minutes} minute`;
    } else {
      timeString = `~ ${minutes} minutes`;
    }
  
    setAverageReadingTime(timeString);
  };
  const findLongestWord = (text) => {
    const words = text.trim().split(/\s+/);
    let longest = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    setLongestWord(longest || '-'); // Update with '-' if no words
  };

  return (
    <div>
      <ResultBox
        wordCount={wordCount}
        characterCount={characterCount}
        sentenceCount={sentenceCount}
        paragraphCount={paragraphCount}
        pronounCount={pronounCount}
      />
       <TextArea onTextChange={handleTextChange} />
      <BottomResultBox averageReadingTime={averageReadingTime} longestWord={longestWord} />
    </div>
  );
};

export default MainLogic;
