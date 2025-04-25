import React, { useState, useEffect } from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-70 z-50 backdrop-blur-sm">
      <div className="relative">
        {/* Outer spinner */}
        <div className="w-20 h-20 border-4 border-blue-300 border-opacity-30 border-t-blue-500 border-solid rounded-full animate-spin"></div>
        
        {/* Inner spinner - spins in opposite direction */}
        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-purple-300 border-opacity-30 border-t-purple-500 border-solid rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
        
        {/* Center dot */}
        <div className="absolute top-8 left-8 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
      
      {/* Loading text with animated dots */}
      <div className="mt-6 text-white text-lg font-medium">
        {message}{dots}
      </div>
    </div>
  );
};

export default LoadingSpinner;