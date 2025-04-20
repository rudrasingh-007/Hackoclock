import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
          Track Your Carbon Footprint
          <span className="block text-green-600">Save Our Planet</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Small changes in our daily habits can have a significant impact on our planet. 
          Discover how your lifestyle affects climate change and learn actionable steps to reduce your carbon footprint.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a 
            href="#tracker" 
            className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Calculate Your Footprint
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 bg-white text-green-600 rounded-full font-medium border border-green-600 hover:bg-green-50 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
          >
            Learn More
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-green-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;