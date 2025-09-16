import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Projects = ({ onNavigateToProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Presensi QR dengan Android Studio',
      description: 'A QR Code-based attendance application developed using Android Studio with real-time tracking and attendance validation features.',
      technologies: ['Android Studio', 'Java', 'Xampp', 'QR Code', 'CodeIgniter', 'MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript' ],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500',
      projectPage: 'qr-presence'
    },
    {
      title: 'Job Finder UI App',
      description: 'A job search application developed using React Native with real-time tracking features.',
      technologies: ['React Native', 'JavaScript', 'Expo', 'React Navigation'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
      projectPage: 'ecommerce-detail'
    },
    {
      title: 'Penjualan dan Persediaan obat dengan Java Netbeans',
      description: 'A drug sales and inventory application developed using Java Netbeans with real-time tracking features.',
      technologies: ['Java', 'Netbeans', 'MySQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
      projectPage: 'task-management-detail'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500',
      projectPage: 'weather-dashboard-detail'
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Here are some of the projects I've worked on and am currently developing
          </p>
        </motion.div>

        {/* Main Carousel Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-lg overflow-hidden max-w-2xl mx-auto"
            >
              <div className="relative overflow-hidden">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full text-white hover:bg-opacity-80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={projects[currentIndex].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full text-white hover:bg-opacity-80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{projects[currentIndex].title}</h3>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">{projects[currentIndex].description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {projects[currentIndex].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800 bg-opacity-20 text-gray-800 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {projects[currentIndex].projectPage && (
                  <div className="mt-6">
                    <motion.button
                      onClick={() => onNavigateToProject && onNavigateToProject(projects[currentIndex].projectPage)}
                      className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Details</span>
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800 bg-opacity-20 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:bg-opacity-30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800 bg-opacity-20 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:bg-opacity-30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Project Thumbnails */}
        <div className="flex justify-center mt-8 space-x-4">
          {projects.map((project, index) => (
            <motion.button
              key={index}
              onClick={() => goToProject(index)}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-gray-800 scale-110'
                  : 'opacity-60 hover:opacity-80'
              }`}
              whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-20 h-16 md:w-24 md:h-20 object-cover"
              />
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-gray-800 bg-opacity-20"
                  layoutId="activeThumbnail"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
