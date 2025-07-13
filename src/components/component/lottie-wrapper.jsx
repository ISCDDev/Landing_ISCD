"use client";
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export function LottieWrapper({ animationData, style, className }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div style={style} className={className}></div>;
  }

  return (
    <Lottie
      animationData={animationData}
      style={style}
      className={className}
    />
  );
} 