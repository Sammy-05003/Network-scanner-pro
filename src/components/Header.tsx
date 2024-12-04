import React from 'react';
import { Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg dark:bg-indigo-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Network size={32} />
            <span className="text-2xl font-bold">Network Scanner Pro</span>
          </Link>
          <div className="flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="hover:text-indigo-200">Dashboard</Link>
                </li>
                <li>
                  <Link to="/devices" className="hover:text-indigo-200">Devices</Link>
                </li>
                <li>
                  <Link to="/scan" className="hover:text-indigo-200">New Scan</Link>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};