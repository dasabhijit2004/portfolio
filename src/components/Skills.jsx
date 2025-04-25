import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Import icons from react-icons
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiFirebase, SiMysql, SiPython, SiC, SiCplusplus, SiVercel,
  SiBootstrap, SiTailwindcss, SiFigma, SiAdobe, SiGit, SiGithub, SiPostman,
  SiNetlify,
  SiRender
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

// Icon mapping
const iconMap = {
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  JavaScript: <SiJavascript />,
  React: <SiReact />,
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
  { name: "HTML", color: "#E34F26", percent: 95, category: "Frontend" },
  { name: "CSS", color: "#1572B6", percent: 90, category: "Frontend" },
  { name: "JavaScript", color: "#F7DF1E", percent: 92, category: "Frontend" },
  { name: "React", color: "#61DAFB", percent: 88, category: "Frontend" },
  { name: "NodeJS", color: "#539E43", percent: 85, category: "Backend" },
  { name: "ExpressJS", color: "#fafafa", percent: 82, category: "Backend" },
  { name: "MongoDB", color: "#47A248", percent: 87, category: "Database" },
  { name: "Firebase", color: "#FFCA28", percent: 80, category: "Backend" },
  { name: "SQL", color: "#00758F", percent: 75, category: "Database" },
  { name: "Python", color: "#3776AB", percent: 89, category: "Backend" },
  { name: "Java", color: "#007396", percent: 90, category: "Backend" },
  { name: "C", color: "#A8B9CC", percent: 70, category: "Backend" },
  { name: "C++", color: "#00599C", percent: 78, category: "Backend" },
  { name: "Vercel", color: "#fafafa", percent: 85, category: "Tools" },
  { name: "Bootstrap", color: "#7952B3", percent: 84, category: "Frontend" },
  { name: "Tailwind", color: "#38B2AC", percent: 90, category: "Frontend" },
  { name: "Figma", color: "#F24E1E", percent: 80, category: "Tools" },
  { name: "Adobe", color: "#FF0000", percent: 76, category: "Tools" },
  { name: "Git", color: "#F1502F", percent: 85, category: "Version Control" },
  { name: "GitHub", color: "#fafafa", percent: 87, category: "Version Control" },
  { name: "Postman", color: "#FF6C37", percent: 80, category: "Tools" },
  { name: "Netlify", color: "#61DAFB", percent: 90, category: "Tools" },
  { name: "Render", color: "#fafafa", percent: 75, category: "Tools" }
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
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        if (current > percent) {
          clearInterval(interval);
        }
        setValue(current);
      }, 10);
    }
  }, [isVisible, percent]);

  return (
    <div className="flex flex-col items-center space-y-2" ref={skillRef}>
      <div className="w-20 h-20 bg-[#111132] rounded-full shadow-lg p-2">
        <CircularProgressbarWithChildren
          value={value}
          styles={buildStyles({
            pathColor: color,
            trailColor: "#2c2c4a",
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
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === "All" ? skills : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#050414] text-white px-4 py-20" id="skills">
      <h2 className="text-4xl font-bold text-center mb-16">My Skills</h2>
      <div className="text-center mb-10">
        <button
          onClick={() => setSelectedCategory("All")}
          className="px-4 py-2 bg-gray-600 rounded mr-4 mb-4 sm:mb-0 hover:bg-blue-500 transition-all duration-300"
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("Frontend")}
          className="px-4 py-2 bg-gray-600 rounded mr-4 mb-4 sm:mb-0 hover:bg-blue-500 transition-all duration-300"
        >
          Frontend
        </button>
        <button
          onClick={() => setSelectedCategory("Backend")}
          className="px-4 py-2 bg-gray-600 rounded mr-4 mb-4 sm:mb-0 hover:bg-blue-500 transition-all duration-300"
        >
          Backend
        </button>
        <button
          onClick={() => setSelectedCategory("Database")}
          className="px-4 py-2 bg-gray-600 rounded mr-4 mb-4 sm:mb-0 hover:bg-blue-500 transition-all duration-300"
        >
          Database
        </button>
        <button
          onClick={() => setSelectedCategory("Version Control")}
          className="px-4 py-2 bg-gray-600 rounded mr-4 mb-4 sm:mb-0 hover:bg-blue-500 transition-all duration-300"
        >
          Version Control
        </button>
        <button
          onClick={() => setSelectedCategory("Tools")}
          className="px-4 py-2 bg-gray-600 rounded mb-4 sm:mb-0 hover:bg-blue-500 transition-all duration-300"
        >
          Tools
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-center">
        {filteredSkills.map((skill, index) => (
          <SkillProgress
            key={index}
            name={skill.name}
            percent={skill.percent}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
