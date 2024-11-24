import { useLocation } from 'react-router-dom';
import { User } from 'lucide-react';

const titles: Record<string, string> = {
  '/': 'الرئيسية',
  '/search': 'البحث',
  '/notifications': 'الإشعارات',
  '/profile': 'الملف الشخصي',
  '/settings': 'الإعدادات',
  '/live': 'البث المباشر'
};

function Header() {
  const location = useLocation();
  const title = titles[location.pathname] || 'الرئيسية';

  return (
    <header className="fixed top-0 right-0 left-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="flex justify-between items-center px-4 h-14">
        <h1 className="text-lg font-bold">{title}</h1>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

export default Header;