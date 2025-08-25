"use client";

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function CTAAdmin() {
  const [cta, setCta] = useState({
    id: '',
    title: 'Ready to Make a Difference?',
    description: 'Join thousands of supporters helping communities worldwide',
    buttonText: 'Donate Now',
    buttonLink: '#donate',
    bgColor: '#3B82F6',
    textColor: '#FFFFFF'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/cta');
        const data = await response.json();
        if (data && !data.error) {
          setCta({
            id: data.id || '',
            title: data.title || 'Ready to Make a Difference?',
            description: data.description || 'Join thousands of supporters helping communities worldwide',
            buttonText: data.buttonText || 'Donate Now',
            buttonLink: data.buttonLink || '#donate',
            bgColor: data.bgColor || '#3B82F6',
            textColor: data.textColor || '#FFFFFF'
          });
        }
      } catch (error) {
        console.error('Error fetching CTA content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      const method = cta.id ? 'PUT' : 'POST';
      const response = await fetch('/api/admin/cta', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cta),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success('CTA section saved!');
        if (!cta.id && result.id) {
          setCta({ ...cta, id: result.id });
        }
      } else {
        toast.error(result.error || 'Error saving CTA content');
      }
    } catch (error) {
      toast.error('Error saving CTA content');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Call-to-Action Section</h1>
        <p className="text-gray-600">Manage the main call-to-action content</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Title
            </label>
            <input
              type="text"
              value={cta.title}
              onChange={(e) => setCta({...cta, title: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={cta.description}
              onChange={(e) => setCta({...cta, description: e.target.value})}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Text
              </label>
              <input
                type="text"
                value={cta.buttonText}
                onChange={(e) => setCta({...cta, buttonText: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Link
              </label>
              <input
                type="text"
                value={cta.buttonLink}
                onChange={(e) => setCta({...cta, buttonLink: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Background Color
              </label>
              <input
                type="color"
                value={cta.bgColor}
                onChange={(e) => setCta({...cta, bgColor: e.target.value})}
                className="w-full h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Text Color
              </label>
              <input
                type="color"
                value={cta.textColor}
                onChange={(e) => setCta({...cta, textColor: e.target.value})}
                className="w-full h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Preview</h3>
            <div className="p-6 rounded-md text-center" style={{ backgroundColor: cta.bgColor, color: cta.textColor }}>
              <h2 className="text-2xl font-bold mb-2">{cta.title}</h2>
              <p className="mb-4">{cta.description}</p>
              <div className="space-x-4">
                <span className="px-4 py-2 rounded-md font-medium" style={{ backgroundColor: cta.textColor, color: cta.bgColor }}>
                  {cta.buttonText}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}