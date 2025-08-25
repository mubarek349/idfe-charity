"use client";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  InformationCircleIcon,
  AcademicCapIcon,
  ChartBarIcon,
  EnvelopeIcon,
  XMarkIcon,
  UserIcon,
  MegaphoneIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({ isOpen, onToggle }: AdminSidebarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: HomeIcon },
    { name: "Hero Section", href: "/admin/hero", icon: MegaphoneIcon },
    { name: "About", href: "/admin/about", icon: InformationCircleIcon },
    { name: "Programs", href: "/admin/programs", icon: AcademicCapIcon },
    { name: "Impact", href: "/admin/impact", icon: ChartBarIcon },
    { name: "Contact", href: "/admin/contact", icon: EnvelopeIcon },
    { name: "CTA", href: "/admin/cta", icon: DocumentTextIcon },
    { name: "Footer", href: "/admin/footer", icon: DocumentTextIcon },
  ];

  return (
    <>
      {/* Overlay for mobile with backdrop blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed top-0 h-full z-50
    transform transition-all duration-300 ease-in-out
    bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl
    ${
      isOpen
        ? "translate-x-0 md:translate-x-0"
        : "translate-x-full md:-translate-x-full"
    }
    right-0 md:left-0 md:right-auto
    w-80 overflow-y-auto scroll-smooth pr-1

  `}
      >
        <div className="p-6 ">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 sticky top-6 bg-white z-10">
            <div className="flex items-center gap-2 flex-shrink-0">
              <UserIcon className="w-10 h-10 text-blue-600" />
              <h1 className="text-2xl font-bold text-blue-600">Admin Panel</h1>
            </div>
            <button
              onClick={onToggle}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={onToggle}
                className="
                  flex items-center px-4 py-3 text-gray-700 rounded-lg
                  hover:bg-blue-50 hover:text-blue-700 hover:border-l-4 hover:border-l-blue-500
                  transition-all duration-200 ease-in-out
                  group relative overflow-hidden
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <item.icon className="h-5 w-5 mr-3 text-gray-400 group-hover:text-blue-500 relative z-10" />
                <span className="font-medium relative z-10">{item.name}</span>
              </a>
            ))}
            <a 
              href="/"
              className="text-gray-700 flex sm:hidden hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium items-center"
            >
              <span>View Site</span>
            </a>
          </nav>
          
          {/* Additional Content */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
              <h3 className="text-sm font-semibold text-blue-800 mb-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm text-blue-700 hover:text-blue-800 py-2 px-3 rounded-md hover:bg-blue-100 transition-all duration-200 hover:shadow-sm">
                  📊 View Analytics
                </button>
                <button className="w-full text-left text-sm text-blue-700 hover:text-blue-800 py-2 px-3 rounded-md hover:bg-blue-100 transition-all duration-200 hover:shadow-sm">
                  🔄 Backup Data
                </button>
                <button className="w-full text-left text-sm text-blue-700 hover:text-blue-800 py-2 px-3 rounded-md hover:bg-blue-100 transition-all duration-200 hover:shadow-sm">
                  ⚙️ Settings
                </button>
              </div>
            </div>
          </div>


        </div>
      </aside>
    </>
  );
}
