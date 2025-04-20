import React from 'react';
import { UserProfile } from './types';
import { BarChart3, Target, TrendingDown } from 'lucide-react';

interface FootprintDisplayProps {
  userProfile: UserProfile;
}

// CO2 equivalence examples to make numbers more relatable
const getCO2Equivalence = (kgCO2: number): string => {
  if (kgCO2 < 10) {
    return `Equivalent to charging your smartphone ${Math.round(kgCO2 * 250)} times`;
  } else if (kgCO2 < 50) {
    return `Equivalent to driving a car for ${Math.round(kgCO2 / 0.12)} km`;
  } else if (kgCO2 < 200) {
    return `Equivalent to a ${Math.round(kgCO2 / 150)} hour flight`;
  } else {
    return `Equivalent to the electricity used by an average home for ${Math.round(kgCO2 / 8)} days`;
  }
};

// Category breakdown calculation
const calculateCategoryBreakdown = (userProfile: UserProfile) => {
  const breakdown = {
    transportation: 0,
    home: 0,
    food: 0,
    consumption: 0
  };
  
  userProfile.activities.forEach(activity => {
    breakdown[activity.category] += activity.carbonFootprint;
  });
  
  return breakdown;
};

const FootprintDisplay: React.FC<FootprintDisplayProps> = ({ userProfile }) => {
  const categoryBreakdown = calculateCategoryBreakdown(userProfile);
  const totalFootprint = userProfile.totalFootprint;
  
  // Calculate percentages for the chart
  const getPercentage = (value: number) => {
    return totalFootprint > 0 ? Math.round((value / totalFootprint) * 100) : 0;
  };
  
  const transportationPercentage = getPercentage(categoryBreakdown.transportation);
  const homePercentage = getPercentage(categoryBreakdown.home);
  const foodPercentage = getPercentage(categoryBreakdown.food);
  const consumptionPercentage = getPercentage(categoryBreakdown.consumption);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
        Your Carbon Footprint
      </h3>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-1">Total this week:</p>
        <div className="flex items-end mb-1">
          <span className="text-3xl font-bold text-gray-800">{totalFootprint}</span>
          <span className="text-lg text-gray-600 ml-1">kg CO₂e</span>
        </div>
        <p className="text-sm text-gray-500">{getCO2Equivalence(totalFootprint)}</p>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Category Breakdown</h4>
        
        {/* Transportation */}
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Transportation</span>
            <span className="text-gray-800 font-medium">{transportationPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${transportationPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Home */}
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Home Energy</span>
            <span className="text-gray-800 font-medium">{homePercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-yellow-500 h-2.5 rounded-full"
              style={{ width: `${homePercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Food */}
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Food</span>
            <span className="text-gray-800 font-medium">{foodPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${foodPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Consumption */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Consumption</span>
            <span className="text-gray-800 font-medium">{consumptionPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-purple-500 h-2.5 rounded-full"
              style={{ width: `${consumptionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
        <div className="flex items-center">
          <Target className="h-4 w-4 mr-1 text-green-600" />
          <span>Target Reduction: {userProfile.targetReduction}%</span>
        </div>
        <div className="flex items-center">
          <TrendingDown className="h-4 w-4 mr-1 text-green-600" />
          <span>Monthly Avg: {userProfile.monthlyAverage} kg</span>
        </div>
      </div>
    </div>
  );
};

export default FootprintDisplay;