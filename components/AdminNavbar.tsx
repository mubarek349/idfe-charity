"use client";
import { Bars3Icon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { logout } from '@/actions/authentication';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface AdminNavbarProps {
  onSidebarToggle: () => void;
}

export default function AdminNavbar({ onSidebarToggle }: AdminNavbarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result.success) {
        toast.success('Logged out successfully');
        router.push('/login');
      } else {
        toast.error('Logout failed');
      }
    } catch (error) {
      toast.error('Logout failed');
    }
  };
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Sidebar Toggle Button */}
            <button
              onClick={onSidebarToggle}
              className="hidden md:block p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 mr-3"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  <img src="logo.png" alt="" />
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-600">Admin Panel</h1>
                <p className="text-xs text-gray-500">IDFE Charity</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="/"
              className="text-gray-700 hidden sm:flex hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium items-center"
            >
              <span>View Site</span>
            </a>
            <button 
              onClick={handleLogout}
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-1" />
              <span>Logout</span>
            </button>
          </div>
          
          <button
            onClick={onSidebarToggle}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}