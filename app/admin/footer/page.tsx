"use client";

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function FooterAdmin() {
  const [footer, setFooter] = useState({
    id: '',
    description: 'Empowering communities through sustainable development and humanitarian aid.',
    quickLinks: [
      { title: 'About Us', url: '#about' },
      { title: 'Programs', url: '#programs' },
      { title: 'Impact', url: '#impact' },
      { title: 'Contact', url: '#contact' }
    ],
    socialLinks: [
      { platform: 'Facebook', url: 'https://facebook.com/idfecharity', icon: 'facebook' },
      { platform: 'Twitter', url: 'https://twitter.com/idfecharity', icon: 'twitter' },
      { platform: 'Instagram', url: 'https://instagram.com/idfecharity', icon: 'instagram' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/idfecharity', icon: 'linkedin' }
    ],
    copyright: '© 2024 IDFE Charity. All rights reserved.'
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/footer');
        const data = await response.json();
        if (data && !data.error) {
          setFooter({
            id: data.id || '',
            description: data.description || 'Empowering communities through sustainable development and humanitarian aid.',
            quickLinks: data.quickLinks || [
              { title: 'About Us', url: '#about' },
              { title: 'Programs', url: '#programs' },
              { title: 'Impact', url: '#impact' },
              { title: 'Contact', url: '#contact' }
            ],
            socialLinks: data.socialLinks || [
              { platform: 'Facebook', url: 'https://facebook.com/idfecharity', icon: 'facebook' },
              { platform: 'Twitter', url: 'https://twitter.com/idfecharity', icon: 'twitter' },
              { platform: 'Instagram', url: 'https://instagram.com/idfecharity', icon: 'instagram' },
              { platform: 'LinkedIn', url: 'https://linkedin.com/company/idfecharity', icon: 'linkedin' }
            ],
            copyright: data.copyright || '© 2024 IDFE Charity. All rights reserved.'
          });
        }
      } catch (error) {
        console.error('Error fetching footer content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      const method = footer.id ? 'PUT' : 'POST';
      const response = await fetch('/api/admin/footer', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(footer),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success('Footer saved!');
        if (!footer.id && result.id) {
          setFooter({ ...footer, id: result.id });
        }
      } else {
        toast.error(result.error || 'Error saving footer content');
      }
    } catch (error) {
      toast.error('Error saving footer content');
    }
  };

  const handleSocialLinkChange = (index: number, field: string, value: string) => {
    const updatedSocialLinks = footer.socialLinks.map((link, i) => 
      i === index ? { ...link, [field]: value } : link
    );
    setFooter({ ...footer, socialLinks: updatedSocialLinks });
  };

  const handleQuickLinkChange = (index: number, field: string, value: string) => {
    const updatedQuickLinks = footer.quickLinks.map((link, i) => 
      i === index ? { ...link, [field]: value } : link
    );
    setFooter({ ...footer, quickLinks: updatedQuickLinks });
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
        <h1 className="text-2xl font-bold text-gray-900">Footer Settings</h1>
        <p className="text-gray-600">Manage footer content and links</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={footer.description}
              onChange={(e) => setFooter({...footer, description: e.target.value})}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              {footer.quickLinks.map((link, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Link Title"
                    value={link.title}
                    onChange={(e) => handleQuickLinkChange(index, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Link URL"
                    value={link.url}
                    onChange={(e) => handleQuickLinkChange(index, 'url', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Social Media Links</h3>
            <div className="space-y-3">
              {footer.socialLinks.map((link, index) => (
                <div key={index} className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Platform"
                    value={link.platform}
                    onChange={(e) => handleSocialLinkChange(index, 'platform', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="url"
                    placeholder="URL"
                    value={link.url}
                    onChange={(e) => handleSocialLinkChange(index, 'url', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Icon"
                    value={link.icon}
                    onChange={(e) => handleSocialLinkChange(index, 'icon', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Copyright Text
            </label>
            <input
              type="text"
              value={footer.copyright}
              onChange={(e) => setFooter({...footer, copyright: e.target.value})}
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