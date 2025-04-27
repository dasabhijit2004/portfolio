import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const projectsData = [
  {
    title: "News60",
    description: "A news aggregator app that provides the latest news from various sources.",
    image: "/news60.png",
    githubLink: "https://github.com/username/ecommerce-platform",
    liveDemo: "https://ecommerce-demo.example.com",
    category: "web",
    featured: true,
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Firebase"],
      deployment: ["Vercel", "Render"]
    }
  },
  {
    title: "Career Compass",
    description: "A web application that helps users find suitable career paths based on their skills and interests.",
    image: "/career_compass.png",
    githubLink: "https://github.com/username/ai-image-generator",
    liveDemo: "https://ai-image-gen.example.com",
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
    image: "/bio_care.png",
    githubLink: "https://github.com/username/task-dashboard",
    liveDemo: "https://task-dashboard.example.com",
    category: "web",
    featured: false,
    techStack: {
      frontend: ["HTML", "CSS"],
      backend: ["Express", "MongoDB"],
      deployment: ["Vercel", "Render"]
    }
  },
  {
    title: "Code Reviewer",
    description: "An AI-powered code review tool that provides suggestions and improvements.",
    image: "/code_reviewer.png",
    githubLink: "https://github.com/username/sentiment-analysis",
    liveDemo: "https://sentiment.example.com",
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
    image: "/car-price.png",
    githubLink: "https://github.com/username/fitness-app",
    liveDemo: "https://fitness-app.example.com",
    category: "ai",
    featured: true,
    techStack: {
      frontend: ["Streamlit"],
      backend: ["Python", "Scikit-learn"],
      deployment: ["Streamlit Cloud"]
    }
  },
  // {
  //   title: "AR Navigation",
  //   description: "An augmented reality app for indoor navigation in complex buildings.",
  //   image: "/api/placeholder/400/300",
  //   githubLink: "https://github.com/username/ar-navigation",
  //   liveDemo: "https://ar-nav.example.com",
  //   category: "mobile",
  //   featured: false,
  //   techStack: {
  //     frontend: ["React Native", "ARKit", "ARCore"],
  //     backend: ["Python", "Django"],
  //     deployment: ["App Store", "Google Play"]
  //   }
  // }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
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
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'web': return 'Web Development';
      case 'ai': return 'AI/ML';
      // case 'mobile': return 'Mobile';
      default: return category;
    }
  };

  return (
    <div className="py-10 px-4 md:px-20 relative" id="projects">
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
        <div className="hidden md:block">
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700 transition-colors shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700 transition-colors shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        <div
          ref={scrollContainerRef}
          className={`md:flex md:space-x-4 md:overflow-x-auto md:pb-4 md:snap-x md:snap-mandatory grid grid-cols-1 sm:grid-cols-2 gap-4 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'} scrollbar-none`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:min-w-[280px] md:max-w-[280px] md:snap-start flex flex-col"
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 relative max-w-2xl w-full text-white">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-100"
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
