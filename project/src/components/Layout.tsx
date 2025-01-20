import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  MessageCircle, 
  Award, 
  BarChart2, 
  BookMarked,
  Users,
  Settings
} from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Resources', href: '/resources', icon: BookOpen },
    { name: 'Mood Tracker', href: '/mood', icon: BarChart2 },
    { name: 'Peer Support', href: '/forum', icon: Users },
    { name: 'Counseling', href: '/counseling', icon: MessageCircle },
    { name: 'Challenges', href: '/challenges', icon: Award },
    { name: 'Learning', href: '/learn', icon: BookMarked },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-primary-50">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-primary-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Link to="/" className="flex ml-2 md:mr-24">
                <span className="self-center text-xl font-semibold sm:text-2xl text-primary-700">ZenBliss</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-primary-200 sm:translate-x-0">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-primary-100 ${
                      location.pathname === item.href ? 'bg-primary-100' : ''
                    }`}
                  >
                    <Icon className="w-6 h-6 text-primary-600 transition duration-75" />
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 pt-20">
        <div className="p-4 border-2 border-primary-200 border-dashed rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;