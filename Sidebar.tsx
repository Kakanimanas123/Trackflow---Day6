import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, PackageCheck, Calendar, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Leads', path: '/leads', icon: Users },
    { name: 'Orders', path: '/orders', icon: PackageCheck },
    { name: 'Reminders', path: '/reminders', icon: Calendar },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="h-full flex flex-col border-r border-gray-200 bg-white">
      <div className="flex items-center h-16 flex-shrink-0 px-4 border-b border-gray-200">
        <div className="flex items-center">
          <span className="text-xl font-bold text-blue-600">Track</span>
          <span className="text-xl font-bold text-gray-900">Flow</span>
        </div>
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon
                className={`mr-3 flex-shrink-0 h-5 w-5 ${
                  isActive(item.path) ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                }`}
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
        <div className="flex items-center">
          <div>
            <p className="text-sm font-medium text-gray-700">TrackFlow</p>
            <p className="text-xs text-gray-500">v1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;