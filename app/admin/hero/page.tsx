"use client";

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function HeroAdmin() {
  const [heroData, setHeroData] = useState({
    id: '',
    title: 'Making a Difference',
    subtitle: 'Together',
    description: 'Join us in our mission to create positive change in communities around the world.',
    buttonText: 'Donate Now',
    buttonLink: '#donate',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/hero');
        const data = await response.json();
        if (data && !data.error) {
          setHeroData({
            id: data.id || '',
            title: data.title || 'Making a Difference',
            subtitle: data.subtitle || 'Together',
            description: data.description || 'Join us in our mission to create positive change in communities around the world.',
            buttonText: data.buttonText || 'Donate Now',
            buttonLink: data.buttonLink || '#donate',
            imageUrl: data.imageUrl || ''
          });
        }
      } catch (error) {
        console.error('Error fetching hero content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      const method = heroData.id ? 'PUT' : 'POST';
      const response = await fetch('/api/admin/hero', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(heroData),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success('Hero section saved!');
        if (!heroData.id && result.id) {
          setHeroData({ ...heroData, id: result.id });
        }
      } else {
        toast.error(result.error || 'Error saving hero content');
      }
    } catch (error) {
      toast.error('Error saving hero content');
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
        <h1 className="text-2xl font-bold text-gray-900">Hero Section</h1>
        <p className="text-gray-600">Manage the main hero banner content</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={heroData.title}
              onChange={(e) => setHeroData({...heroData, title: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={heroData.subtitle}
              onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={heroData.description}
              onChange={(e) => setHeroData({...heroData, description: e.target.value})}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
              <input
                type="text"
                value={heroData.buttonText}
                onChange={(e) => setHeroData({...heroData, buttonText: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Button Link</label>
              <input
                type="text"
                value={heroData.buttonLink}
                onChange={(e) => setHeroData({...heroData, buttonLink: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
            <input
              type="url"
              value={heroData.imageUrl}
              onChange={(e) => setHeroData({...heroData, imageUrl: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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