import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Import icons from react-icons
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiFirebase, SiMysql, SiPython, SiC, SiCplusplus, SiVercel,
  SiBootstrap, SiTailwindcss, SiFigma, SiAdobe, SiGit, SiGithub, SiPostman,
  SiNetlify, SiRender,
  SiNextdotjs
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Icon mapping
const iconMap = {
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  JavaScript: <SiJavascript />,
  React: <SiReact />,
  Next: <SiNextdotjs />,
  NodeJS: <SiNodedotjs />,
  ExpressJS: <SiExpress />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  SQL: <SiMysql />,
  Python: <SiPython />,
  Java: <FaJava />,
  C: <SiC />,
  "C++": <SiCplusplus />,
  Vercel: <SiVercel />,
  Bootstrap: <SiBootstrap />,
  Tailwind: <SiTailwindcss />,
  Figma: <SiFigma />,
  Adobe: <SiAdobe />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Postman: <SiPostman />,
  Netlify: <SiNetlify />,
  Render: <SiRender />
};

// Skill data
const skills = [
  { name: "HTML", color: "#E34F26", percent: 85, category: "Frontend" },
  { name: "CSS", color: "#1572B6", percent: 80, category: "Frontend" },
  { name: "JavaScript", color: "#F7DF1E", percent: 82, category: "Languages" },
  { name: "React", color: "#61DAFB", percent: 78, category: "Frontend" },
  { name: "Next", color: "#61DAFB", percent: 63, category: "Frontend" },
  { name: "NodeJS", color: "#539E43", percent: 75, category: "Backend" },
  { name: "ExpressJS", color: "#fafafa", percent: 72, category: "Backend" },
  { name: "MongoDB", color: "#47A248", percent: 77, category: "Database" },
  { name: "Firebase", color: "#FFCA28", percent: 70, category: "Backend" },
  { name: "SQL", color: "#00758F", percent: 65, category: "Database" },
  { name: "Python", color: "#3776AB", percent: 79, category: "Languages" },
  { name: "Java", color: "#007396", percent: 80, category: "Languages" },
  { name: "C", color: "#A8B9CC", percent: 70, category: "Languages" },
  { name: "C++", color: "#00599C", percent: 75, category: "Languages" },
  { name: "Vercel", color: "#fafafa", percent: 80, category: "Tools" },
  { name: "Bootstrap", color: "#7952B3", percent: 79, category: "Frontend" },
  { name: "Tailwind", color: "#38B2AC", percent: 80, category: "Frontend" },
  { name: "Figma", color: "#F24E1E", percent: 70, category: "Tools" },
  { name: "Adobe", color: "#FF0000", percent: 66, category: "Tools" },
  { name: "Git", color: "#F1502F", percent: 75, category: "Tools" },
  { name: "GitHub", color: "#fafafa", percent: 77, category: "Tools" },
  { name: "Postman", color: "#FF6C37", percent: 70, category: "Tools" },
  { name: "Netlify", color: "#61DAFB", percent: 80, category: "Tools" },
  { name: "Render", color: "#fafafa", percent: 65, category: "Tools" }
];

// Skill component with progress bar
const SkillProgress = ({ name, percent, color }) => {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) observer.observe(skillRef.current);

    return () => {
      if (skillRef.current) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate the progress bar value
      const animationDuration = 800; // Total duration in ms
      const framesPerSecond = 60;
      const totalFrames = (animationDuration / 1000) * framesPerSecond;
      const increment = percent / totalFrames;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= percent) {
          setValue(percent);
          clearInterval(timer);
        } else {
          setValue(Math.floor(current));
        }
      }, 1000 / framesPerSecond);

      return () => clearInterval(timer);
    }
  }, [isVisible, percent]);

  return (
    <div
      className="flex flex-col items-center space-y-2 transform transition-all duration-500 ease-out opacity-0 animate-fade-slide-up"
      ref={skillRef}
      style={{ animationDelay: '100ms' }} // Staggered animation
    >
      <div className="w-20 h-20 bg-[#111132] rounded-full shadow-lg p-2">
        <CircularProgressbarWithChildren
          value={value}
          styles={buildStyles({
            pathColor: color,
            trailColor: "#2c2c4a",
            pathTransitionDuration: 0.15,
          })}
        >
          <div className="text-2xl" style={{ color }}>
            {iconMap[name]}
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="text-white text-sm text-center">{name}</div>
      <div className="text-sm text-gray-400">{value}%</div>
    </div>
  );
};


// Main component for skills
const Skills = () => {
  // Define categories, removing "All"
  const categories = ["Languages", "Frontend", "Backend", "Database", "Tools"];
  
  // Set the initial category to the first one in the list
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filter skills based on the selected category
  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="bg-[#050414] text-white px-4 py-20" id="skills">
      <h2 className="text-4xl font-bold text-center mb-16">My Skills</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 
              ${selectedCategory === category
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/50 scale-105"
                : "bg-[#2c2c4a] text-sm text-gray-400 hover:bg-blue-600 hover:shadow-md hover:scale-105"}
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-center transition-all duration-700">
        {filteredSkills.map((skill, index) => (
          <SkillProgress
            key={`${selectedCategory}-${index}`} // Add key for re-rendering on filter change
            name={skill.name}
            percent={skill.percent}
            color={skill.color}
          />
        ))}
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.7s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Skills;