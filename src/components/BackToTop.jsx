import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";


const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true); // Show the button after scrolling down 300px
      } else {
        setShowBackToTop(false); // Hide it when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTop;
