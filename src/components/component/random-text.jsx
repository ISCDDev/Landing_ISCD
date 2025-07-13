'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RandomTextEffect = ({ originalText, className }) => {
  const [displayedText, setDisplayedText] = useState("snfprtjsmfe qasngt vndytpujxs pdjwmkfptj");

  useEffect(() => {
    const generateRandomText = (text) => {
      return text
        .split('')
        .map((char) => (char === ' ' ? ' ' : getRandomChar()))
        .join('');
    };

    const getRandomChar = () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    };

    let timer;
    timer = setInterval(() => {
      const randomText = generateRandomText(originalText);
      setDisplayedText(randomText);
    }, 70);

    setTimeout(() => {
      clearInterval(timer);
      setDisplayedText(originalText);
    }, 1200);

    return () => clearInterval(timer);
  }, [originalText]);

  return (
    <motion.h1 className={className} 
    initial={{ opacity: 0 , y: 50}}
        animate={{ opacity: 1 ,y :0}}
        transition={{ duration: 1 }}
    >
      {displayedText}
    </motion.h1>
  );
};

export default RandomTextEffect;