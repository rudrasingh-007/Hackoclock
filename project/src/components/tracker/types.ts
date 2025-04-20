// Carbon footprint activity types
export type ActivityCategory = 'transportation' | 'home' | 'food' | 'consumption';

export interface Activity {
  id: string;
  category: ActivityCategory;
  type: string;
  value: number;
  unit: string;
  date: string;
  carbonFootprint: number; // in kg CO2e
}

// User profile with settings and history
export interface UserProfile {
  activities: Activity[];
  totalFootprint: number; // total kg CO2e
  weeklyAverage: number;
  monthlyAverage: number;
  targetReduction: number; // user's goal in percentage
}

// Transportation activity types
export interface TransportationActivity {
  type: 'car' | 'bus' | 'train' | 'plane' | 'motorcycle' | 'bicycle' | 'walking';
  fuelType?: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
  distance: number; // in kilometers
  passengers?: number;
}

// Home energy activity types
export interface HomeActivity {
  type: 'electricity' | 'naturalGas' | 'heating' | 'water';
  amount: number;
  renewable?: boolean;
}

// Food activity types
export interface FoodActivity {
  type: 'redMeat' | 'poultry' | 'fish' | 'dairy' | 'vegetables' | 'fruits' | 'grains';
  amount: number; // in kg or servings
  local?: boolean;
  organic?: boolean;
}

// Consumption activity types
export interface ConsumptionActivity {
  type: 'clothing' | 'electronics' | 'household' | 'other';
  item: string;
  new?: boolean;
}

// Recommendations based on user activities
export interface Recommendation {
  id: string;
  category: ActivityCategory;
  title: string;
  description: string;
  potentialImpact: number; // potential CO2e savings in kg
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
}