"use client";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  InformationCircleIcon,
  AcademicCapIcon,
  ChartBarIcon,
  EnvelopeIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

interface LeftSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function LeftSidebar({ isOpen, onToggle }: LeftSidebarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navigation = [
    { name: "Home", href: "#home", icon: HomeIcon },
    { name: "About", href: "#about", icon: InformationCircleIcon },
    { name: "Programs", href: "#programs", icon: AcademicCapIcon },
    { name: "Impact", href: "#impact", icon: ChartBarIcon },
    { name: "Contact", href: "#contact", icon: EnvelopeIcon },
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
        fixed left-0 top-0 h-full z-100
        transform transition-all duration-300 ease-in-out
        bg-white/95 backdrop-blur-md border-r border-gray-200 shadow-xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:top-0 lg:h-screen
        w-80  lg:hidden overflow-auto
      `}
      >
        <div className="p-6 ">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 lg:hidden sticky top-6 bg-white z-100">
            <div className="flex items-center gap-2 flex-shrink-0">
              <img src="/logo.png" alt="logo" className="w-10 h-10 " />
              <h1 className="text-2xl font-bold text-green-600">
                IDFE Charity
              </h1>
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
                  hover:bg-green-50 hover:text-green-700 hover:border-l-4 hover:border-l-green-500
                  transition-all duration-200 ease-in-out
                  group relative overflow-hidden
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <item.icon className="h-5 w-5 mr-3 text-gray-400 group-hover:text-green-500 relative z-10" />
                <span className="font-medium relative z-10">{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Additional Content */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
              <h3 className="text-sm font-semibold text-green-800 mb-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm text-green-700 hover:text-green-800 py-2 px-3 rounded-md hover:bg-green-100 transition-all duration-200 hover:shadow-sm">
                  💝 Make a Donation
                </button>
                <button className="w-full text-left text-sm text-green-700 hover:text-green-800 py-2 px-3 rounded-md hover:bg-green-100 transition-all duration-200 hover:shadow-sm">
                  🤝 Volunteer Today
                </button>
                <button className="w-full text-left text-sm text-green-700 hover:text-green-800 py-2 px-3 rounded-md hover:bg-green-100 transition-all duration-200 hover:shadow-sm">
                  📞 Contact Us
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="text-sm font-semibold text-blue-800 mb-3">
                Our Impact
              </h3>
              <div className="space-y-2 text-xs text-blue-700">
                <div className="flex justify-between">
                  <span>Communities Helped:</span>
                  <span className="font-semibold">150+</span>
                </div>
                <div className="flex justify-between">
                  <span>Lives Impacted:</span>
                  <span className="font-semibold">10,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Projects Completed:</span>
                  <span className="font-semibold">75+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
