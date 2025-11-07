import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-apple-gray-100 dark:bg-apple-gray-900 text-apple-gray-900 dark:text-apple-gray-100 font-sans antialiased transition-colors duration-300">
        <Header />
        <main className="container mx-auto px-6 md:px-12 py-12">
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;