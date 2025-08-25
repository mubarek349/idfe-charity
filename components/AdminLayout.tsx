"use client";

import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminNavbar from "@/components/AdminNavbar";
import { Toaster } from "react-hot-toast";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Toaster 
        position="bottom-right" 
        toastOptions={{ 
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            style: {
              background: '#2563eb',
            },
          },
          error: {
            style: {
              background: '#dc2626',
            },
          },
        }} 
        reverseOrder={false} 
      />
      <AdminSidebar isOpen={sidebarOpen} onToggle={handleSidebarToggle} />
      <main className="flex flex-col min-h-screen">
        <AdminNavbar onSidebarToggle={handleSidebarToggle} />
        <div className="flex-1 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}