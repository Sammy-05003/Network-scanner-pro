import React from 'react';
import { ScanForm } from '../components/ScanForm';

export const ScanPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Network Scan</h1>
      <div className="max-w-2xl mx-auto">
        <ScanForm />
      </div>
    </div>
  );
};