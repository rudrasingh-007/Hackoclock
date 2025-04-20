import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import IntroSection from './components/home/IntroSection';
import ClimateFactsSection from './components/home/ClimateFactsSection';
import AboutSection from './components/about/AboutSection';
import TeamSection from './components/about/TeamSection';
import CarbonTracker from './components/tracker/CarbonTracker';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/layout/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero isDarkMode={isDarkMode} />
        <IntroSection isDarkMode={isDarkMode} />
        <CarbonTracker isDarkMode={isDarkMode} />
        <ClimateFactsSection isDarkMode={isDarkMode} />
        <AboutSection isDarkMode={isDarkMode} />
        <TeamSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;