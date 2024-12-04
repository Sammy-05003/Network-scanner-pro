import React, { useState } from 'react';
import { Scan } from 'lucide-react';

export const ScanForm: React.FC = () => {
  const [ipRange, setIpRange] = useState('192.168.1.1-254');
  const [scanning, setScanning] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    setScanning(true);
    // Simulate scanning
    setTimeout(() => setScanning(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Network Scan</h2>
      <form onSubmit={handleScan} className="space-y-4">
        <div>
          <label htmlFor="ipRange" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            IP Range
          </label>
          <input
            type="text"
            id="ipRange"
            value={ipRange}
            onChange={(e) => setIpRange(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="192.168.1.1-254"
          />
        </div>
        <button
          type="submit"
          disabled={scanning}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors"
        >
          <Scan className="w-5 h-5 mr-2" />
          {scanning ? 'Scanning...' : 'Start Scan'}
        </button>
      </form>
    </div>
  );
};