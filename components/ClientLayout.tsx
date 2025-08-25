"use client";

import { useState } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ErrorBoundary>
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
              background: '#059669',
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
      <LeftSidebar isOpen={sidebarOpen} onToggle={handleSidebarToggle} />
      <main className="flex flex-col min-h-screen">
        <Navbar onSidebarToggle={handleSidebarToggle} />
        <div className="flex-1">{children}</div>
      </main>
    </ErrorBoundary>
  );
}