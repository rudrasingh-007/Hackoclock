import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { UserProfile } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface ChartSectionProps {
  userProfile: UserProfile;
  isDarkMode: boolean;
}

const ChartSection: React.FC<ChartSectionProps> = ({ userProfile, isDarkMode }) => {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'year'>('week');

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDarkMode ? '#D1D5DB' : '#374151',
        },
      },
      title: {
        display: true,
        text: 'Carbon Emissions by Category',
        color: isDarkMode ? '#D1D5DB' : '#374151',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDarkMode ? '#374151' : '#E5E7EB',
        },
        ticks: {
          color: isDarkMode ? '#D1D5DB' : '#374151',
        },
      },
      x: {
        grid: {
          color: isDarkMode ? '#374151' : '#E5E7EB',
        },
        ticks: {
          color: isDarkMode ? '#D1D5DB' : '#374151',
        },
      },
    },
  };

  // Sample data - in a real app, this would come from actual user data
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Transportation',
        data: [5.2, 4.8, 6.1, 5.5, 4.9, 3.2, 2.8],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Home Energy',
        data: [8.1, 7.9, 7.8, 8.2, 7.5, 7.8, 7.6],
        backgroundColor: 'rgba(245, 158, 11, 0.5)',
      },
      {
        label: 'Food',
        data: [4.2, 3.9, 4.5, 4.1, 4.8, 5.2, 4.6],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      },
      {
        label: 'Consumption',
        data: [2.1, 1.8, 2.5, 1.9, 2.2, 3.1, 2.4],
        backgroundColor: 'rgba(168, 85, 247, 0.5)',
      },
    ],
  };

  const monthlyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Total Emissions',
        data: [85, 78, 92, 88],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const yearlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Emissions',
        data: [320, 315, 340, 335, 345, 355, 360, 365, 355, 350, 340, 335],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Emissions Analysis
        </h3>
        <div className="flex space-x-2">
          {(['week', 'month', 'year'] as const).map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-4 py-2 rounded-md transition-colors ${
                timeframe === period
                  ? isDarkMode
                    ? 'bg-green-600 text-white'
                    : 'bg-green-600 text-white'
                  : isDarkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[400px]">
        {timeframe === 'week' && <Bar options={chartOptions} data={weeklyData} />}
        {timeframe === 'month' && <Line options={chartOptions} data={monthlyData} />}
        {timeframe === 'year' && <Line options={chartOptions} data={yearlyData} />}
      </div>
    </div>
  );
};

export default ChartSection;