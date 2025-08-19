"use client";
import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/outline';

interface NavbarProps {
  onSidebarToggle: () => void;
}

export default function Navbar({ onSidebarToggle }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Sidebar Toggle Button */}
            <button
              onClick={onSidebarToggle}
              className="hidden md:block p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 mr-3"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <img src="/logo.png" alt="logo" className="w-10 h-10 " />
              <h1 className="text-2xl font-bold text-green-600">IDFE Charity</h1>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#programs" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Programs</a>
              <a href="#impact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Impact</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <button
              onClick={onSidebarToggle}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 mr-3"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
        </div>
      </div>
    </nav>
  );
}



