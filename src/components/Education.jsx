import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { School } from "lucide-react";

const educationData = [
  {
    title: "BTech in CSE",
    institution: "Academy of Technology, Hooghly",
    year: "2022 - 2026",
    side: "left",
  },
  {
    title: "Higher Secondary",
    institution: "Ramakrishna Mission Vidyapith, Purulia",
    year: "2020 - 2022",
    side: "right",
  },
  {
    title: "Secondary",
    institution: "Ramakrishna Mission Sarada Vidyapith, Joyrambati",
    year: "2014 - 2020",
    side: "left",
  },
];

const Education = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const dot = entry.target;
          if (entry.isIntersecting) {
            dot.classList.add("bg-blue-500");
            dot.classList.remove("bg-white");
          } else {
            dot.classList.remove("bg-blue-500");
            dot.classList.add("bg-white");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const checkpoints = document.querySelectorAll(".scroll-checkpoint");
    checkpoints.forEach((dot) => observer.observe(dot));

    return () => {
      checkpoints.forEach((dot) => observer.unobserve(dot));
    };
  }, []);

  return (
    <div className="relative px-4 sm:px-6 md:px-20 py-16 bg-[#050414] text-white min-h-screen overflow-y-hidden" id="education">
      <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

      {/* Desktop vertical line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white opacity-20"></div>

      {/* Mobile vertical line */}
      <div className="absolute md:hidden left-1/2 transform -translate-x-1/2 top-32 bottom-10 w-0.5 bg-white opacity-20 z-0"></div>

      <div className="flex flex-col gap-16 relative z-10">
        {educationData.map((edu, index) => {
          const isLeft = edu.side === "left";
          return (
            <motion.div
              key={index}
              initial={
                isMobile
                  ? { y: 50, opacity: 0 }
                  : {
                      x: isLeft ? -100 : 100,
                      opacity: 0,
                    }
              }
              whileInView={
                isMobile
                  ? { y: 0, opacity: 1 }
                  : {
                      x: 0,
                      opacity: 1,
                    }
              }
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`w-full flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                } relative`}
            >
              {/* Icon on line */}
              <span className="scroll-checkpoint absolute md:left-1/2 left-1/2 -translate-x-1/2 bg-white p-[6px] rounded-full z-10 shadow-sm shadow-blue-500 border-2 border-white">
                <School className="w-5 h-5 text-white" />
              </span>

              {/* Box: below dot in mobile, left/right in desktop */}
              <div
                className={`mt-10 md:mt-0 w-full md:w-[calc(50%-30px)] bg-[#111132] p-6 rounded-xl border border-blue-800 text-center md:text-left 
    ${isLeft ? "md:text-right" : "md:text-left"} 
    transition-shadow duration-300 ease-in-out hover:shadow-sm hover:shadow-blue-500`}
              >
                <h3 className="text-xl font-bold text-blue-400">{edu.title}</h3>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
