import React from 'react';
import { HashLoader } from 'react-spinners';
import { motion } from 'framer-motion';

const SpinnerLoader = () => {
  const welcomeText = "Welcome...";

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#000f1d] text-[#dadada] font-poppins z-50">
      <HashLoader color="#155bf2" size={50} />
      <motion.h2 
        className="mt-6 text-xl md:text-2xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.15,
          }
        }}
      >
        {welcomeText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default SpinnerLoader;
