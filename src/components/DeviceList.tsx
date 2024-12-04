import React from 'react';
import { Wifi, WifiOff, Monitor, Laptop } from 'lucide-react';
import { Device } from '../types/network';

interface DeviceListProps {
  devices: Device[];
}

export const DeviceList: React.FC<DeviceListProps> = ({ devices }) => {
  const getDeviceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'desktop':
        return <Monitor className="w-5 h-5" />;
      case 'laptop':
        return <Laptop className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Connected Devices</h2>
        <div className="space-y-4">
          {devices.map((device) => (
            <div
              key={device.id}
              className="border dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="dark:text-white">{getDeviceIcon(device.deviceType)}</div>
                  <div>
                    <h3 className="font-medium dark:text-white">{device.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{device.ipAddress}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {device.status === 'online' ? (
                    <Wifi className="w-5 h-5 text-green-500" />
                  ) : (
                    <WifiOff className="w-5 h-5 text-red-500" />
                  )}
                  <span className={device.status === 'online' ? 'text-green-500' : 'text-red-500'}>
                    {device.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};