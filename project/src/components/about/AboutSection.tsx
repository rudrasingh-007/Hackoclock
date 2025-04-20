import React from 'react';
import { BarChart, Leaf, Shield, Users } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About EcoTrack</h2>
          <p className="text-lg text-gray-600">
            We're on a mission to empower individuals with the tools and knowledge to understand 
            and reduce their environmental impact through accessible carbon footprint tracking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              EcoTrack was founded in 2025 by a team of environmental scientists, software engineers, 
              and climate advocates who recognized the need for accessible tools to help individuals 
              understand their impact on the environment.
            </p>
            <p className="text-gray-600 mb-4">
              We believe that meaningful climate action starts with awareness. By providing people with 
              insights about their carbon footprint and actionable recommendations, we aim to inspire 
              positive environmental changes that add up to significant collective impact.
            </p>
            <p className="text-gray-600">
              Our platform combines scientific research with user-friendly technology to make 
              carbon footprint tracking simple, educational, and impactful.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg" 
              alt="Team collaborating on sustainability solutions" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-10">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Leaf className="h-8 w-8" />}
              title="Environmental Stewardship"
              description="We're committed to protecting our planet through education, awareness, and positive action."
            />
            
            <ValueCard 
              icon={<Shield className="h-8 w-8" />}
              title="Scientific Integrity"
              description="Our calculations and recommendations are based on peer-reviewed science and reliable data sources."
            />
            
            <ValueCard 
              icon={<BarChart className="h-8 w-8" />}
              title="Measurable Impact"
              description="We focus on practical, measurable actions that lead to real environmental benefits."
            />
            
            <ValueCard 
              icon={<Users className="h-8 w-8" />}
              title="Accessibility"
              description="We believe environmental tools should be accessible to everyone, regardless of background or expertise."
            />
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#team" 
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md"
          >
            Meet Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;