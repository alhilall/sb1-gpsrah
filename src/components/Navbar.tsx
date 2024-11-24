import { useLocation, Link } from 'react-router-dom';
import { Home, Search, Bell, User, Settings, Video } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'الرئيسية' },
  { path: '/search', icon: Search, label: 'البحث' },
  { path: '/notifications', icon: Bell, label: 'الإشعارات' },
  { path: '/profile', icon: User, label: 'حسابي' },
  { path: '/settings', icon: Settings, label: 'الإعدادات' },
  { path: '/live', icon: Video, label: 'البث المباشر' }
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 right-0 left-0 bg-white/90 backdrop-blur-sm border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors
              ${location.pathname === path ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;