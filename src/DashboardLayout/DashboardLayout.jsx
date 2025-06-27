import React, { useState } from 'react';
import { Link, NavLink, Outlet,  } from 'react-router';
import { ImExit } from "react-icons/im";

import {
  HomeIcon,
  ClipboardDocumentListIcon,
  Squares2X2Icon,
  PlusCircleIcon,
  ArrowLeftIcon,
  ArrowRightOnRectangleIcon,
  
} from '@heroicons/react/24/outline';

const DrawerLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/dashboard', icon: <HomeIcon className="w-5 h-5" /> },
    { name: 'All Plants', path: '/dashboard/AllPlant', icon: <ClipboardDocumentListIcon className="w-5 h-5" /> },
    { name: 'My Plants', path: '/dashboard/myPlant', icon: <Squares2X2Icon className="w-5 h-5" /> },
    { name: 'Add Plant', path: '/dashboard/addPlant', icon: <PlusCircleIcon className="w-5 h-5" /> }
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg z-40 transform transition-transform duration-300
        ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:block
      `}>
        <div className="flex flex-col justify-between h-full">
          {/* Top section */}
          <div>
            <div className="p-6 text-xl font-bold border-b">🌿 Dashboard</div>
            <nav className="mt-6 space-y-2 px-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  end={item.path === '/dashboard'}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:bg-green-100 ${
                      isActive ? 'bg-green-200 font-semibold text-green-800' : ''
                    }`
                  }
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Bottom Back Button */}
          <div className="p-4 border-t">
            <Link
              to='/'             
              className="flex items-center uppercase gap-2 text-sm px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-full justify-center"
            >
              <ImExit
 className="w-4 h-4" />
              Exit from DashBoard
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar (mobile) */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between lg:hidden">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </header>


        {/* Main content */}
        <main className="overflow-y-auto flex-1 bg-gray-50 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DrawerLayout;
