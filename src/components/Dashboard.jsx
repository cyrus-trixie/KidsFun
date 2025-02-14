import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  
  const [businessName, setBusinessName] = useState('');

  useEffect(() => {
    // Get business name from localStorage
    const storedBusinessName = localStorage.getItem('businessName');
    if (storedBusinessName) {
      setBusinessName(storedBusinessName);
    }
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="space-y-3">
          <a href="#" className="block p-2 rounded bg-green-800 text-white">
            Home
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            Bookings
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            Cancellations
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            Profile
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            Reports
          </a>
          <Link
            className="block p-2 rounded text-red-500 hover:bg-red-100"
            to='/'
          >
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
      <h1 className="text-2xl font-bold text-green-600">Your journey starts here, {businessName} – welcome aboard!</h1>


        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold">Total Orders</h3>
            <p className="text-2xl">0</p>
          </div>
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold">Pending Requests</h3>
            <p className="text-2xl">0</p>
          </div>
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold">Completed Services</h3>
            <p className="text-2xl">0</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
