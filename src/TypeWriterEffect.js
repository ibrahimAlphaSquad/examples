import { useState, useEffect } from 'react';

function TypeWriterEffect({ text, typingSpeed }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [typingSpeed, setTypingSpeed] = useState(80); // adjust this value to change the typing speed

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <p>{displayText}</p>
  );
}

export default TypeWriterEffect;
