import React from 'react';
import { Activity } from './types';
import { Calendar, Trash2, Car, Home, Utensils, ShoppingBag } from 'lucide-react';

interface ActivityListProps {
  activities: Activity[];
  onRemoveActivity: (id: string) => void;
}

const getActivityIcon = (category: string) => {
  switch (category) {
    case 'transportation':
      return <Car className="h-5 w-5 text-blue-500" />;
    case 'home':
      return <Home className="h-5 w-5 text-yellow-500" />;
    case 'food':
      return <Utensils className="h-5 w-5 text-green-500" />;
    case 'consumption':
      return <ShoppingBag className="h-5 w-5 text-purple-500" />;
    default:
      return null;
  }
};

const formatActivityType = (type: string) => {
  return type.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
};

const ActivityList: React.FC<ActivityListProps> = ({ activities, onRemoveActivity }) => {
  // Group activities by date
  const groupedActivities: Record<string, Activity[]> = {};
  
  activities.forEach(activity => {
    if (!groupedActivities[activity.date]) {
      groupedActivities[activity.date] = [];
    }
    groupedActivities[activity.date].push(activity);
  });
  
  // Sort dates in descending order
  const sortedDates = Object.keys(groupedActivities).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  
  if (activities.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No activities logged yet. Start tracking to see your data here!</p>
      </div>
    );
  }
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  return (
    <div className="space-y-8">
      {sortedDates.map(date => (
        <div key={date} className="bg-white rounded-lg shadow">
          <div className="bg-gray-50 px-4 py-3 rounded-t-lg border-b flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <h3 className="font-medium text-gray-700">{formatDate(date)}</h3>
          </div>
          
          <ul className="divide-y divide-gray-100">
            {groupedActivities[date].map(activity => (
              <li key={activity.id} className="px-4 py-3 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="mr-3">{getActivityIcon(activity.category)}</div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {formatActivityType(activity.type)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {activity.value} {activity.unit}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 mr-4">
                    {activity.carbonFootprint} kg CO₂e
                  </span>
                  <button
                    onClick={() => onRemoveActivity(activity.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Remove activity"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;