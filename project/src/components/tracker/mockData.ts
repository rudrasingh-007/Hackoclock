import { Activity, Recommendation, UserProfile } from './types';

// Sample activities data
export const sampleActivities: Activity[] = [
  {
    id: '1',
    category: 'transportation',
    type: 'car',
    value: 25,
    unit: 'km',
    date: '2025-05-01',
    carbonFootprint: 5.75
  },
  {
    id: '2',
    category: 'home',
    type: 'electricity',
    value: 120,
    unit: 'kWh',
    date: '2025-05-02',
    carbonFootprint: 38.4
  },
  {
    id: '3',
    category: 'food',
    type: 'redMeat',
    value: 0.3,
    unit: 'kg',
    date: '2025-05-02',
    carbonFootprint: 7.2
  },
  {
    id: '4',
    category: 'transportation',
    type: 'bus',
    value: 15,
    unit: 'km',
    date: '2025-05-03',
    carbonFootprint: 1.65
  },
  {
    id: '5',
    category: 'consumption',
    type: 'clothing',
    value: 1,
    unit: 'item',
    date: '2025-05-04',
    carbonFootprint: 10
  },
  {
    id: '6',
    category: 'transportation',
    type: 'train',
    value: 100,
    unit: 'km',
    date: '2025-05-05',
    carbonFootprint: 4
  }
];

// Sample user profile
export const sampleUserProfile: UserProfile = {
  activities: sampleActivities,
  totalFootprint: 67, // calculated from all activities
  weeklyAverage: 67,
  monthlyAverage: 268,
  targetReduction: 15
};

// Sample recommendations
export const sampleRecommendations: Recommendation[] = [
  {
    id: '1',
    category: 'transportation',
    title: 'Switch to Public Transport',
    description: 'Try replacing car trips with public transportation. A single bus can replace dozens of cars, significantly reducing carbon emissions per passenger.',
    potentialImpact: 2.5,
    difficulty: 'medium'
  },
  {
    id: '2',
    category: 'home',
    title: 'Switch to LED Light Bulbs',
    description: 'Replace conventional light bulbs with LED alternatives. They use up to 90% less energy and last much longer.',
    potentialImpact: 0.3,
    difficulty: 'easy'
  },
  {
    id: '3',
    category: 'food',
    title: 'Reduce Red Meat Consumption',
    description: 'Try having meat-free days each week. Red meat has one of the highest carbon footprints of all foods.',
    potentialImpact: 6,
    difficulty: 'medium'
  },
  {
    id: '4',
    category: 'consumption',
    title: 'Buy Second-hand Clothing',
    description: 'Next time you need clothes, consider second-hand options. Manufacturing new clothes has a large carbon footprint.',
    potentialImpact: 8,
    difficulty: 'easy'
  },
  {
    id: '5',
    category: 'home',
    title: 'Install a Smart Thermostat',
    description: 'Smart thermostats can significantly reduce your heating and cooling energy use by optimizing temperature settings.',
    potentialImpact: 5.2,
    difficulty: 'medium'
  }
];

// Emission factors for different activities (simplified for demo)
export const emissionFactors = {
  transportation: {
    car: {
      gasoline: 0.23, // kg CO2e per km
      diesel: 0.21,
      electric: 0.05,
      hybrid: 0.12
    },
    bus: 0.11, // kg CO2e per km per person
    train: 0.04, // kg CO2e per km per person
    plane: 0.25, // kg CO2e per km per person (short haul)
    motorcycle: 0.12, // kg CO2e per km
    bicycle: 0, // kg CO2e per km
    walking: 0 // kg CO2e per km
  },
  home: {
    electricity: 0.32, // kg CO2e per kWh (varies by region)
    naturalGas: 0.2, // kg CO2e per kWh
    heating: 0.27, // kg CO2e per kWh
    water: 0.001 // kg CO2e per liter
  },
  food: {
    redMeat: 24, // kg CO2e per kg
    poultry: 6.9, // kg CO2e per kg
    fish: 5.4, // kg CO2e per kg
    dairy: 13.5, // kg CO2e per kg
    vegetables: 2, // kg CO2e per kg
    fruits: 1.1, // kg CO2e per kg
    grains: 1.4 // kg CO2e per kg
  },
  consumption: {
    clothing: 10, // kg CO2e per item (avg)
    electronics: 30, // kg CO2e per item (avg)
    household: 8, // kg CO2e per item (avg)
    other: 5 // kg CO2e per item (avg)
  }
};

// Helper function to calculate carbon footprint
export const calculateCarbonFootprint = (
  category: string, 
  type: string, 
  value: number, 
  options: Record<string, any> = {}
): number => {
  let factor = 0;
  
  switch (category) {
    case 'transportation':
      if (type === 'car' && options.fuelType) {
        factor = emissionFactors.transportation.car[options.fuelType as keyof typeof emissionFactors.transportation.car];
      } else {
        factor = emissionFactors.transportation[type as keyof typeof emissionFactors.transportation] || 0;
      }
      
      // Adjust for number of passengers if applicable
      if (options.passengers && options.passengers > 1) {
        factor = factor / options.passengers;
      }
      break;
    
    case 'home':
      factor = emissionFactors.home[type as keyof typeof emissionFactors.home] || 0;
      
      // Adjust for renewable energy if applicable
      if (options.renewable && type === 'electricity') {
        factor = factor * 0.1; // 90% reduction for renewable electricity
      }
      break;
      
    case 'food':
      factor = emissionFactors.food[type as keyof typeof emissionFactors.food] || 0;
      
      // Adjust for organic and local food if applicable
      if (options.organic) factor = factor * 0.9; // 10% reduction for organic
      if (options.local) factor = factor * 0.9; // 10% reduction for local
      break;
      
    case 'consumption':
      factor = emissionFactors.consumption[type as keyof typeof emissionFactors.consumption] || 0;
      
      // Adjust for second-hand items
      if (options.new === false) factor = factor * 0.2; // 80% reduction for second-hand
      break;
  }
  
  return parseFloat((factor * value).toFixed(2));
};

// Generate AI-powered recommendations based on user activities
export const generateRecommendations = (activities: Activity[]): Recommendation[] => {
  // This would normally use an AI algorithm to analyze patterns
  // For this demo, we'll return sample recommendations
  return sampleRecommendations;
};