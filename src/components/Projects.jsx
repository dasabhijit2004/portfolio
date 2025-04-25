import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Updated project data with simplified categories
const projectsData = [
  {
    title: "News60",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    image: "/api/placeholder/400/300",
    githubLink: "https://github.com/username/ecommerce-platform",
    liveDemo: "https://ecommerce-demo.example.com",
    category: "web",
    featured: true,
    techStack: {
      frontend: ["React", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
      deployment: ["AWS", "Docker"]
    }
  },
  {
    title: "AI Image Generator",
    description: "An application that uses deep learning to generate unique images based on text prompts.",
    image: "/api/placeholder/400/300",
    githubLink: "https://github.com/username/ai-image-generator",
    liveDemo: "https://ai-image-gen.example.com",
    category: "ai",
    featured: true,
    techStack: {
      frontend: ["React", "Chakra UI"],
      backend: ["Python", "FastAPI"],
      ai: ["TensorFlow", "PyTorch", "DALL-E API"]
    }
  },
  {
    title: "Task Dashboard",
    description: "A responsive dashboard for team task management with real-time updates.",
    image: "/api/placeholder/400/300",
    githubLink: "https://github.com/username/task-dashboard",
    liveDemo: "https://task-dashboard.example.com",
    category: "web",
    featured: false,
    techStack: {
      frontend: ["React", "TypeScript", "Material UI"],
      backend: ["Firebase"],
      deployment: ["Vercel"]
    }
  },
  {
    title: "Sentiment Analysis",
    description: "A machine learning tool that analyzes sentiment in customer reviews and comments.",
    image: "/api/placeholder/400/300",
    githubLink: "https://github.com/username/sentiment-analysis",
    liveDemo: "https://sentiment.example.com",
    category: "ai",
    featured: false,
    techStack: {
      frontend: ["Vue.js"],
      backend: ["Python", "Flask"],
      ai: ["Scikit-learn", "NLTK", "Transformers"]
    }
  },
  {
    title: "Fitness App",
    description: "A cross-platform mobile application for tracking workouts and health metrics.",
    image: "/api/placeholder/400/300",
    githubLink: "https://github.com/username/fitness-app",
    liveDemo: "https://fitness-app.example.com",
    category: "mobile",
    featured: true,
    techStack: {
      frontend: ["React Native", "Expo"],
      backend: ["Node.js", "GraphQL"],
      deployment: ["App Store", "Google Play"]
    }
  },
  {
    title: "AR Navigation",
    description: "An augmented reality app for indoor navigation in complex buildings.",
    image: "/api/placeholder/400/300",
    githubLink: "https://github.com/username/ar-navigation",
    liveDemo: "https://ar-nav.example.com",
    category: "mobile",
    featured: false,
    techStack: {
      frontend: ["React Native", "ARKit", "ARCore"],
      backend: ["Python", "Django"],
      deployment: ["App Store", "Google Play"]
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  // Simplified filter categories
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI/ML" },
    { id: "mobile", label: "Mobile" }
  ];

  // Effect for filtering projects
  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      if (filter === "all") {
        setVisibleProjects(projectsData);
      } else {
        setVisibleProjects(projectsData.filter(project => project.category === filter));
      }
      setIsAnimating(false);
      
      // Reset scroll position and update scroll buttons
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0;
        checkScrollPosition();
      }
    }, 300);
  }, [filter]);

  // Initialize with all projects
  useEffect(() => {
    setVisibleProjects(projectsData);
  }, []);

  // Check if can scroll left or right
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Can scroll left if not at the beginning
      setCanScrollLeft(scrollLeft > 0);
      
      // Can scroll right if not at the end (with a small buffer for rounding errors)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  // Add scroll event listener to update button visibility
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      // Check initial state
      checkScrollPosition();
      
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
      };
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

  // Scroll handlers for desktop horizontal scrolling
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Category label mapper
  const getCategoryLabel = (category) => {
    switch(category) {
      case 'web': return 'Web Development';
      case 'ai': return 'AI/ML';
      case 'mobile': return 'Mobile';
      default: return category;
    }
  };

  return (
    <div className="py-10 px-4 md:px-20 relative" id="projects">
      {/* Clean container without outer box */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-white">My Projects</h2>
        <p className="text-sm text-gray-400 mt-2">A showcase of my technical skills and creative problem-solving</p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              filter === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects container */}
      <div className="relative">
        {/* Scroll buttons (desktop only) */}
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

        {/* Projects grid/scroll container */}
        <div 
          ref={scrollContainerRef}
          className={`
            md:flex md:space-x-4 md:overflow-x-auto md:pb-4 md:snap-x md:snap-mandatory
            grid grid-cols-1 sm:grid-cols-2 gap-4
            transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}
            scrollbar-none
          `}
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

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {Object.values(project.techStack).flat().slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-4 py-3 flex justify-between items-center bg-gray-900">
                <button className="flex items-center text-xs text-blue-500 hover:text-blue-400 transition-colors">
                  <Github size={16} className="mr-1" />
                  GitHub
                </button>
                <button className="flex items-center text-xs text-blue-500 hover:text-blue-400 transition-colors">
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for detailed view */}
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
            <div className="flex flex-wrap gap-3 mb-4">
              {Object.entries(selectedProject.techStack).map(([key, value]) => (
                <div key={key}>
                  <h4 className="font-semibold text-lg">{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                  <ul className="text-sm">
                    {value.map((tech, idx) => (
                      <li key={idx} className="text-gray-300">{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={selectedProject.githubLink} className="text-blue-500 hover:text-blue-400 flex items-center" target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-1" />
                GitHub Repo
              </a>
              <a href={selectedProject.liveDemo} className="text-blue-500 hover:text-blue-400 flex items-center" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-1" />
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