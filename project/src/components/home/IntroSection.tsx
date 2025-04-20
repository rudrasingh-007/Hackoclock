import React from 'react';
import { CloudRain, Thermometer, Users, Wind } from 'lucide-react';

interface IssueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IssueCard: React.FC<IssueCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="text-green-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding Climate Change</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Climate change represents one of the greatest challenges of our time. Human activities 
            are significantly increasing greenhouse gas concentrations in Earth's atmosphere, 
            leading to global warming and related environmental impacts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IssueCard 
            icon={<Thermometer className="h-10 w-10" />}
            title="Rising Temperatures"
            description="Global temperatures have risen by about 1.1°C since pre-industrial times, with each of the last four decades being successively warmer."
          />
          
          <IssueCard 
            icon={<CloudRain className="h-10 w-10" />}
            title="Extreme Weather"
            description="Climate change increases the frequency and intensity of extreme weather events including hurricanes, floods, droughts, and wildfires."
          />
          
          <IssueCard 
            icon={<Wind className="h-10 w-10" />}
            title="Carbon Emissions"
            description="Human activities release about 40 billion tons of CO₂ into the atmosphere annually, primarily from burning fossil fuels and deforestation."
          />
          
          <IssueCard 
            icon={<Users className="h-10 w-10" />}
            title="Human Impact"
            description="Our daily choices in transportation, food, energy use, and consumption all contribute to our individual and collective carbon footprint."
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            The good news? By understanding and tracking our carbon footprint, we can make
            informed decisions to reduce our impact and contribute to climate solutions.
          </p>
          
          <a 
            href="#tracker" 
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md"
          >
            Start Tracking Your Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;