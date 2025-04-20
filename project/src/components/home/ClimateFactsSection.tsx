import React, { useState, useEffect } from 'react';
import { AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

interface FactProps {
  title: string;
  description: string;
  source: string;
  date: string;
}

const FACTS: FactProps[] = [
  {
    title: "Record-Breaking Heat in 2023",
    description: "2023 was officially the hottest year on record, with global temperatures reaching 1.48°C above pre-industrial levels.",
    source: "World Meteorological Organization, 2024",
    date: "January 2024"
  },
  {
    title: "Arctic Sea Ice Decline",
    description: "Arctic sea ice reached its sixth-lowest minimum extent in September 2023, continuing a long-term declining trend of 13% per decade.",
    source: "National Snow and Ice Data Center, 2023",
    date: "October 2023"
  },
  {
    title: "Greenhouse Gas Levels",
    description: "Atmospheric CO2 levels reached a new record of 424 parts per million in 2023, the highest level in over 3 million years.",
    source: "NOAA Global Monitoring Laboratory, 2024",
    date: "February 2024"
  },
  {
    title: "Extreme Weather Events 2023",
    description: "2023 saw unprecedented extreme weather events, with global economic losses from climate disasters exceeding $250 billion.",
    source: "Munich Re, 2024",
    date: "January 2024"
  },
  {
    title: "Ocean Temperature Rise",
    description: "Global ocean temperatures in 2023 reached the highest levels ever recorded, with marine heatwaves affecting 90% of global oceans.",
    source: "Copernicus Climate Change Service, 2024",
    date: "February 2024"
  }
];

const Fact: React.FC<FactProps & { isActive: boolean; isDarkMode: boolean }> = ({ 
  title, 
  description, 
  source, 
  date, 
  isActive, 
  isDarkMode 
}) => (
  <div 
    className={`rounded-lg p-6 transition-all duration-500 ${
      isActive 
        ? isDarkMode 
          ? 'bg-red-900/20 border-l-4 border-red-500 scale-100 opacity-100' 
          : 'bg-red-50 border-l-4 border-red-500 scale-100 opacity-100'
        : 'scale-95 opacity-0 absolute'
    }`}
  >
    <div className="flex items-start">
      <AlertCircle className="w-6 h-6 text-red-500 mt-1 mr-2 flex-shrink-0" />
      <div>
        <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
        <p className={`mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
        <div className="flex justify-between items-center text-sm">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Source: {source}</p>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{date}</p>
        </div>
      </div>
    </div>
  </div>
);

interface ClimateFactsSectionProps {
  isDarkMode: boolean;
}

const ClimateFactsSection: React.FC<ClimateFactsSectionProps> = ({ isDarkMode }) => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  
  const nextFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % FACTS.length);
  };

  const previousFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex - 1 + FACTS.length) % FACTS.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextFact,
    onSwipedRight: previousFact,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  
  // Auto-rotate facts
  useEffect(() => {
    const interval = setInterval(() => {
      nextFact();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Shocking Climate Facts
        </h2>
        <p className={`text-center mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          These sobering facts highlight the urgency of climate action and why tracking and reducing our carbon footprint matters.
        </p>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10">
            <button
              onClick={previousFact}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-100'
              } shadow-lg`}
              aria-label="Previous fact"
            >
              <ChevronLeft className={`h-6 w-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10">
            <button
              onClick={nextFact}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-100'
              } shadow-lg`}
              aria-label="Next fact"
            >
              <ChevronRight className={`h-6 w-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
          </div>
          
          <div {...handlers} className="relative min-h-[200px]">
            {FACTS.map((fact, index) => (
              <Fact 
                key={index} 
                {...fact} 
                isActive={index === currentFactIndex}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {FACTS.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentFactIndex 
                  ? 'bg-red-500 w-4' 
                  : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentFactIndex(index)}
              aria-label={`Show fact ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClimateFactsSection;