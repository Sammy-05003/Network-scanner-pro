import React from 'react';
import { Activity, Wifi, Shield, AlertTriangle } from 'lucide-react';
import { DeviceList } from '../components/DeviceList';
import { mockDevices } from '../utils/mockData';

export const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Active Devices', value: '12', icon: <Activity className="w-6 h-6" />, color: 'bg-blue-500' },
    { title: 'Network Load', value: '45%', icon: <Wifi className="w-6 h-6" />, color: 'bg-green-500' },
    { title: 'Security Score', value: '92%', icon: <Shield className="w-6 h-6" />, color: 'bg-purple-500' },
    { title: 'Alerts', value: '3', icon: <AlertTriangle className="w-6 h-6" />, color: 'bg-yellow-500' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Network Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
            <div className="flex items-center">
              <div className={`${stat.color} rounded-full p-3 text-white mr-4`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-semibold dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DeviceList devices={mockDevices} />
    </div>
  );
};