import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import EducationalBackground from './components/EducationalBackground';
import EmploymentHistory from './components/EmploymentHistory';
import OrganizationHistory from './components/OrganizationHistory';
import MyselfFullStack from './components/MyselfFullStack';
import QRPresence from './components/QRPresence';
import ECommerceDetail from './components/ECommerceDetail';
import TaskManagementDetail from './components/TaskManagementDetail';
import WeatherDashboardDetail from './components/WeatherDashboardDetail';
import { motion } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setActiveSection(page);
    
    // If navigating to home, scroll to top instead of contact
    if (page === 'home') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'qr-presence':
        return <QRPresence onNavigateBack={navigateToPage} />;
      case 'ecommerce-detail':
        return <ECommerceDetail onNavigateBack={navigateToPage} />;
      case 'task-management-detail':
        return <TaskManagementDetail onNavigateBack={navigateToPage} />;
      case 'weather-dashboard-detail':
        return <WeatherDashboardDetail onNavigateBack={navigateToPage} />;
      case 'home':
      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <EducationalBackground />
            <OrganizationHistory />
            <EmploymentHistory />
            <MyselfFullStack />
            <Projects onNavigateToProject={navigateToPage} />
            <Contact />
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onNavigate={navigateToPage} />
      {renderPage()}
    </div>
  );
}

export default App;

