import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const projectsData = [
  {
    title: "Career Compass",
    description: "A web application that helps users find suitable career paths based on their skills and interests.",
    image: "/career_compass.avif",
    githubLink: "https://github.com/dasabhijit2004/career-compass",
    liveDemo: "https://career-compass-chi.vercel.app/",
    category: "ai",
    featured: true,
    techStack: {
      frontend: ["React", "Tailwind"],
      backend: ["NodeJS", "Firebase"],
      ai: ["Mistral"]
    }
  },
  {
    title: "Bio Care",
    description: "A responsive website for teaching Biology in a modern and efficient way.",
    image: "/bio_care.avif",
    githubLink: "https://github.com/dasabhijit2004/bio-care-2026",
    liveDemo: "https://bio-care-2026.vercel.app/",
    category: "web",
    featured: false,
    techStack: {
      frontend: ["NextJS", "Tailwind CSS"],
      backend: ["MongoDB"],
      deployment: ["Vercel"]
    }
  },
  {
    title: "Code Reviewer",
    description: "An AI-powered code review tool that provides suggestions and improvements.",
    image: "/code_reviewer.avif",
    githubLink: "https://github.com/dasabhijit2004/code-reviewer",
    liveDemo: "https://code-reviewer-lemon.vercel.app/",
    category: "ai",
    featured: false,
    techStack: {
      frontend: ["React"],
      backend: ["NodeJS"],
      ai: ["Gemini"]
    }
  },
  {
    title: "Car Price Prediction",
    description: "A machine learning model that predicts car prices based on various features.",
    image: "/car-price.avif",
    githubLink: "https://github.com/dasabhijit2004/car-price-prediction",
    liveDemo: "https://car-price-prediction-ad.streamlit.app/",
    category: "ai",
    featured: true,
    techStack: {
      frontend: ["Streamlit"],
      backend: ["Python", "Scikit-learn"],
      deployment: ["Streamlit Cloud"]
    }
  },
  {
    title: "News60",
    description: "A news aggregator app that provides the latest news from various sources.",
    image: "/news60.avif",
    githubLink: "https://github.com/abhraneel2004/binary_halfbyte",
    liveDemo: "https://binary-halfbyte.vercel.app/",
    category: "web",
    featured: true,
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Firebase"],
      deployment: ["Vercel", "Render"]
    }
  },
  {
    title: "Poseture",
    description: "A deep learning model based website that captures your postures.",
    image: "/posetrue.avif",
    githubLink: "https://github.com/dasabhijit2004/posetrue",
    liveDemo: "https://posetrue.netlify.app",
    category: "ai",
    featured: true,
    techStack: {
      frontend: ["html"],
      backend: ["p5.js", "ml5.js"],
      ai: ["PoseNet"], 
      deployment: ["Netlify"]
    }
  },
  {
    title: "Blog Website",
    description: "A MERN Stck based website that can be used to create and maintain blogs on vaious topics.",
    image: "/blogs.avif",
    githubLink: "https://github.com/dasabhijit2004/blog-website",
    liveDemo: "https://blog-website-lovat-rho.vercel.app/",
    category: "web",
    featured: true,
    techStack: {
      frontend: ["React", "Material UI"],
      backend: ["Express"],
      database: ["MongoDB"], 
      deployment: ["Vercel", "Render"]
    }
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [modalAnimation, setModalAnimation] = useState(false);
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI/ML" },
    // { id: "mobile", label: "Mobile" }
  ];

  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setVisibleProjects(
        filter === "all"
          ? projectsData
          : projectsData.filter(project => project.category === filter)
      );
      setIsAnimating(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0;
        checkScrollPosition();
      }
    }, 300);
  }, [filter]);

  useEffect(() => {
    setVisibleProjects(projectsData);
    
    // Add touch scrolling instructions for mobile
    const container = scrollContainerRef.current;
    if (container && window.innerWidth < 768) {
      setTimeout(() => {
        const instruction = document.createElement('div');
        instruction.className = 'text-gray-400 text-xs text-center mb-2 md:hidden';
        instruction.innerText = 'Swipe to see more projects';
        container.parentNode.insertBefore(instruction, container);
        
        setTimeout(() => {
          instruction.style.opacity = '0';
          instruction.style.transition = 'opacity 1s ease-out';
          setTimeout(() => instruction.remove(), 1000);
        }, 3000);
      }, 500);
    }
  }, []);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, [visibleProjects]);

  const handleClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
    // Trigger modal animation after a short delay
    setTimeout(() => {
      setModalAnimation(true);
    }, 10);
  };

  const closeModal = () => {
    setModalAnimation(false);
    // Add delay before fully removing modal to allow for close animation
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };
  
  // Add smooth-scroll behavior to the projects container
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Add smooth momentum scroll on mobile
      container.style.WebkitOverflowScrolling = 'touch';
      
      // Add scroll snap on mobile
      if (window.innerWidth < 768) {
        container.style.scrollSnapType = 'x mandatory';
        container.style.scrollPadding = '0 16px';
      }
    }
  }, []);

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'web': return 'Web Development';
      case 'ai': return 'AI/ML';
      // case 'mobile': return 'Mobile';
      default: return category;
    }
  };

  return (
    <div className="py-10 px-2 md:px-20 relative" id="projects" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-white">My Projects</h2>
        <p className="text-sm text-gray-400 mt-2">A showcase of my technical skills and creative problem-solving</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${filter === category.id
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <div>
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-1 md:-ml-4 z-10 bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700 transition-colors shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-1 md:-mr-4 z-10 bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700 transition-colors shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        <div
          ref={scrollContainerRef}
          className={`flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'} scrollbar-none`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[280px] max-w-[280px] snap-start flex flex-col"
              onClick={() => handleClick(project)}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <span className="inline-block px-2 py-1 bg-blue-600 bg-opacity-90 text-white text-xs rounded-md">
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-grow">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {Object.values(project.techStack).flat().slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-4 py-3 flex justify-between items-center bg-gray-900">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with animation */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out flex justify-center items-center z-50 p-4 ${modalAnimation ? 'bg-opacity-50' : 'bg-opacity-0'}`}
          onClick={closeModal}
        >
          <div 
            className={`bg-gray-800 rounded-lg p-6 relative max-w-2xl w-full text-white transition-all duration-300 ease-in-out ${modalAnimation ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-100 transition-colors"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{selectedProject.description}</p>

            <div className="relative mb-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {Object.entries(selectedProject.techStack).map(([category, techs], idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-sm font-medium capitalize text-gray-400">{category}</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {techs.map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <Github size={18} className="mr-1" />
                View on GitHub
              </a>
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <ExternalLink size={18} className="mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;