import React from 'react';
import { Recommendation, UserProfile } from './types';
import { 
  LightbulbIcon, 
  Leaf, 
  LineChart, 
  ShieldCheck, 
  ExternalLink,
  ThumbsUp,
  Ban
} from 'lucide-react';

interface InsightsSectionProps {
  recommendations: Recommendation[];
  userProfile: UserProfile;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'text-green-500';
    case 'medium':
      return 'text-yellow-500';
    case 'hard':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
};

const getDifficultyIcon = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return <ThumbsUp className="h-4 w-4 mr-1" />;
    case 'medium':
      return <ShieldCheck className="h-4 w-4 mr-1" />;
    case 'hard':
      return <Ban className="h-4 w-4 mr-1" />;
    default:
      return null;
  }
};

const InsightsSection: React.FC<InsightsSectionProps> = ({ recommendations, userProfile }) => {
  const monthlyAverage = userProfile.monthlyAverage;
  const weeklyAverage = userProfile.weeklyAverage;
  const potentialSavings = recommendations.reduce((total, rec) => total + rec.potentialImpact, 0);
  const potentialPercentage = Math.round((potentialSavings / weeklyAverage) * 100);
  
  return (
    <div>
      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <div className="bg-white p-3 rounded-full shadow mr-4">
            <LightbulbIcon className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Insights</h3>
            <p className="text-gray-700 mb-4">
              Based on your activity patterns, we've identified several opportunities 
              to reduce your carbon footprint. Implementing these recommendations could 
              reduce your weekly emissions by approximately <span className="font-bold text-green-600">{potentialSavings} kg CO₂e ({potentialPercentage}%)</span>.
            </p>
            <div className="bg-white bg-opacity-70 p-3 rounded-md text-sm">
              <p className="text-gray-700">
                <span className="font-medium">Note:</span> These insights are personalized based on 
                your logged activities. The more activities you track, the more accurate and helpful 
                our recommendations will be.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((recommendation) => (
          <div key={recommendation.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`h-2 ${
              recommendation.category === 'transportation' ? 'bg-blue-500' :
              recommendation.category === 'home' ? 'bg-yellow-500' :
              recommendation.category === 'food' ? 'bg-green-500' : 'bg-purple-500'
            }`}></div>
            
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{recommendation.title}</h4>
              <p className="text-gray-600 mb-4">{recommendation.description}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <LineChart className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm text-gray-700">
                    Potential impact: <span className="font-medium">{recommendation.potentialImpact} kg CO₂e/week</span>
                  </span>
                </div>
                
                <div className={`flex items-center text-sm ${getDifficultyColor(recommendation.difficulty)}`}>
                  {getDifficultyIcon(recommendation.difficulty)}
                  <span className="capitalize">{recommendation.difficulty}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 capitalize">
                  {recommendation.category}
                </span>
                <a href="#" className="text-sm text-blue-600 flex items-center hover:text-blue-800 transition-colors">
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="#" 
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md"
        >
          <Leaf className="h-4 w-4 mr-2" />
          Get More Personalized Tips
        </a>
      </div>
    </div>
  );
};

export default InsightsSection;