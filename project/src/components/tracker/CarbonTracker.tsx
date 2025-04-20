import React, { useState } from 'react';
import { sampleUserProfile, sampleActivities, generateRecommendations } from './mockData';
import { Activity, UserProfile } from './types';
import ActivityForm from './ActivityForm';
import FootprintDisplay from './FootprintDisplay';
import ActivityList from './ActivityList';
import InsightsSection from './InsightsSection';
import ChartSection from './ChartSection';

interface CarbonTrackerProps {
  isDarkMode: boolean;
}

const CarbonTracker: React.FC<CarbonTrackerProps> = ({ isDarkMode }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>(sampleUserProfile);
  const [activeTab, setActiveTab] = useState<'log' | 'insights' | 'history' | 'charts'>('log');
  
  // Add a new activity
  const handleAddActivity = (newActivity: Activity) => {
    const updatedActivities = [...userProfile.activities, newActivity];
    const totalFootprint = updatedActivities.reduce((total, activity) => total + activity.carbonFootprint, 0);
    
    setUserProfile({
      ...userProfile,
      activities: updatedActivities,
      totalFootprint
    });
  };
  
  // Remove an activity
  const handleRemoveActivity = (activityId: string) => {
    const updatedActivities = userProfile.activities.filter(activity => activity.id !== activityId);
    const totalFootprint = updatedActivities.reduce((total, activity) => total + activity.carbonFootprint, 0);
    
    setUserProfile({
      ...userProfile,
      activities: updatedActivities,
      totalFootprint
    });
  };
  
  return (
    <section id="tracker" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Carbon Footprint Tracker
          </h2>
          <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Track your daily activities and understand their environmental impact. 
            Get personalized insights to help reduce your carbon footprint.
          </p>
          
          {/* Tabs navigation */}
          <div className={`flex justify-center border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} mb-10`}>
            <button
              className={`px-4 py-2 ${
                activeTab === 'log' 
                  ? `text-green-600 border-b-2 border-green-600 font-medium` 
                  : isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('log')}
            >
              Log Activity
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'charts' 
                  ? `text-green-600 border-b-2 border-green-600 font-medium` 
                  : isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('charts')}
            >
              Charts
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'insights' 
                  ? `text-green-600 border-b-2 border-green-600 font-medium` 
                  : isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('insights')}
            >
              Insights
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'history' 
                  ? `text-green-600 border-b-2 border-green-600 font-medium` 
                  : isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('history')}
            >
              Activity History
            </button>
          </div>
        </div>
        
        {/* Tab content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'log' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ActivityForm onAddActivity={handleAddActivity} isDarkMode={isDarkMode} />
              </div>
              <div>
                <FootprintDisplay userProfile={userProfile} isDarkMode={isDarkMode} />
              </div>
            </div>
          )}
          
          {activeTab === 'charts' && (
            <ChartSection userProfile={userProfile} isDarkMode={isDarkMode} />
          )}
          
          {activeTab === 'insights' && (
            <InsightsSection 
              recommendations={generateRecommendations(userProfile.activities)} 
              userProfile={userProfile}
              isDarkMode={isDarkMode}
            />
          )}
          
          {activeTab === 'history' && (
            <ActivityList 
              activities={userProfile.activities} 
              onRemoveActivity={handleRemoveActivity}
              isDarkMode={isDarkMode}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CarbonTracker;