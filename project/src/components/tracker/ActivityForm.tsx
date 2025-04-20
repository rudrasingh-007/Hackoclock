import React, { useState } from 'react';
import { Activity, ActivityCategory } from './types';
import { calculateCarbonFootprint } from './mockData';
import { Car, Home, Utensils, ShoppingBag } from 'lucide-react';

interface ActivityFormProps {
  onAddActivity: (activity: Activity) => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onAddActivity }) => {
  const [category, setCategory] = useState<ActivityCategory>('transportation');
  const [activityType, setActivityType] = useState('car');
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<Record<string, any>>({
    fuelType: 'gasoline',
    passengers: 1,
    renewable: false,
    local: false,
    organic: false,
    new: true
  });
  
  // Options based on category
  const categoryOptions = {
    transportation: ['car', 'bus', 'train', 'plane', 'motorcycle', 'bicycle', 'walking'],
    home: ['electricity', 'naturalGas', 'heating', 'water'],
    food: ['redMeat', 'poultry', 'fish', 'dairy', 'vegetables', 'fruits', 'grains'],
    consumption: ['clothing', 'electronics', 'household', 'other']
  };
  
  // Units based on category and type
  const getUnit = (): string => {
    if (category === 'transportation') return 'km';
    if (category === 'home') {
      if (activityType === 'water') return 'liters';
      return 'kWh';
    }
    if (category === 'food') return 'kg';
    return 'item';
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!value || isNaN(parseFloat(value)) || parseFloat(value) <= 0) {
      alert('Please enter a valid value');
      return;
    }
    
    const numericValue = parseFloat(value);
    const carbonFootprint = calculateCarbonFootprint(category, activityType, numericValue, options);
    
    const newActivity: Activity = {
      id: Date.now().toString(),
      category,
      type: activityType,
      value: numericValue,
      unit: getUnit(),
      date: new Date().toISOString().split('T')[0],
      carbonFootprint
    };
    
    onAddActivity(newActivity);
    
    // Reset form (but keep the category and activity type)
    setValue('');
  };
  
  // Handle option change
  const handleOptionChange = (key: string, value: any) => {
    setOptions({
      ...options,
      [key]: value
    });
  };
  
  // Handle category change
  const handleCategoryChange = (newCategory: ActivityCategory) => {
    setCategory(newCategory);
    setActivityType(categoryOptions[newCategory][0]);
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Log Your Activity</h3>
      
      {/* Category selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            type="button"
            onClick={() => handleCategoryChange('transportation')}
            className={`flex flex-col items-center justify-center p-3 rounded border ${
              category === 'transportation' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Car className={`h-6 w-6 mb-1 ${category === 'transportation' ? 'text-green-500' : 'text-gray-500'}`} />
            <span className={`text-sm ${category === 'transportation' ? 'text-green-700' : 'text-gray-700'}`}>Transport</span>
          </button>
          
          <button
            type="button"
            onClick={() => handleCategoryChange('home')}
            className={`flex flex-col items-center justify-center p-3 rounded border ${
              category === 'home' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Home className={`h-6 w-6 mb-1 ${category === 'home' ? 'text-green-500' : 'text-gray-500'}`} />
            <span className={`text-sm ${category === 'home' ? 'text-green-700' : 'text-gray-700'}`}>Home</span>
          </button>
          
          <button
            type="button"
            onClick={() => handleCategoryChange('food')}
            className={`flex flex-col items-center justify-center p-3 rounded border ${
              category === 'food' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Utensils className={`h-6 w-6 mb-1 ${category === 'food' ? 'text-green-500' : 'text-gray-500'}`} />
            <span className={`text-sm ${category === 'food' ? 'text-green-700' : 'text-gray-700'}`}>Food</span>
          </button>
          
          <button
            type="button"
            onClick={() => handleCategoryChange('consumption')}
            className={`flex flex-col items-center justify-center p-3 rounded border ${
              category === 'consumption' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <ShoppingBag className={`h-6 w-6 mb-1 ${category === 'consumption' ? 'text-green-500' : 'text-gray-500'}`} />
            <span className={`text-sm ${category === 'consumption' ? 'text-green-700' : 'text-gray-700'}`}>Consumption</span>
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Activity type selection */}
        <div className="mb-4">
          <label htmlFor="activityType" className="block text-sm font-medium text-gray-700 mb-1">
            Activity Type
          </label>
          <select
            id="activityType"
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {categoryOptions[category].map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1).replace(/([A-Z])/g, ' $1')}
              </option>
            ))}
          </select>
        </div>
        
        {/* Value input */}
        <div className="mb-4">
          <label htmlFor="value" className="block text-sm font-medium text-gray-700 mb-1">
            {`Amount (${getUnit()})`}
          </label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            min="0"
            step="0.1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder={`Enter value in ${getUnit()}`}
            required
          />
        </div>
        
        {/* Additional options based on category */}
        {category === 'transportation' && activityType === 'car' && (
          <div className="mb-4">
            <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-1">
              Fuel Type
            </label>
            <select
              id="fuelType"
              value={options.fuelType}
              onChange={(e) => handleOptionChange('fuelType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="gasoline">Gasoline</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
            
            <div className="mt-3">
              <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Passengers
              </label>
              <input
                type="number"
                id="passengers"
                value={options.passengers}
                onChange={(e) => handleOptionChange('passengers', parseInt(e.target.value))}
                min="1"
                max="7"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        )}
        
        {category === 'home' && activityType === 'electricity' && (
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="renewable"
                checked={options.renewable}
                onChange={(e) => handleOptionChange('renewable', e.target.checked)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="renewable" className="ml-2 block text-sm text-gray-700">
                From renewable sources
              </label>
            </div>
          </div>
        )}
        
        {category === 'food' && (
          <div className="mb-4 space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="organic"
                checked={options.organic}
                onChange={(e) => handleOptionChange('organic', e.target.checked)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="organic" className="ml-2 block text-sm text-gray-700">
                Organic
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="local"
                checked={options.local}
                onChange={(e) => handleOptionChange('local', e.target.checked)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="local" className="ml-2 block text-sm text-gray-700">
                Locally produced
              </label>
            </div>
          </div>
        )}
        
        {category === 'consumption' && (
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="new"
                checked={options.new}
                onChange={(e) => handleOptionChange('new', e.target.checked)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="new" className="ml-2 block text-sm text-gray-700">
                Brand new item (unchecked for second-hand)
              </label>
            </div>
          </div>
        )}
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
          Add Activity
        </button>
      </form>
    </div>
  );
};

export default ActivityForm;