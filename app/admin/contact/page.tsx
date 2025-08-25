"use client";

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function ContactAdmin() {
  const [contact, setContact] = useState({
    id: '',
    phone: '+1 (555) 123-4567',
    email: 'info@idfecharity.org',
    address: '123 Charity Street, City, State 12345',
    website: '',
    socialMedia: {
      facebook: 'https://facebook.com/idfecharity',
      twitter: 'https://twitter.com/idfecharity',
      instagram: 'https://instagram.com/idfecharity',
      linkedin: 'https://linkedin.com/company/idfecharity'
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/contact');
        const data = await response.json();
        if (data && !data.error) {
          setContact({
            id: data.id || '',
            phone: data.phone || '+1 (555) 123-4567',
            email: data.email || 'info@idfecharity.org',
            address: data.address || '123 Charity Street, City, State 12345',
            website: data.website || '',
            socialMedia: data.socialMedia || {
              facebook: 'https://facebook.com/idfecharity',
              twitter: 'https://twitter.com/idfecharity',
              instagram: 'https://instagram.com/idfecharity',
              linkedin: 'https://linkedin.com/company/idfecharity'
            }
          });
        }
      } catch (error) {
        console.error('Error fetching contact info:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      const method = contact.id ? 'PUT' : 'POST';
      const response = await fetch('/api/admin/contact', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success('Contact information saved!');
        if (!contact.id && result.id) {
          setContact({ ...contact, id: result.id });
        }
      } else {
        toast.error(result.error || 'Error saving contact info');
      }
    } catch (error) {
      toast.error('Error saving contact info');
    }
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setContact({
      ...contact,
      socialMedia: {
        ...contact.socialMedia,
        [platform]: value
      }
    });
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
        <h1 className="text-2xl font-bold text-gray-900">Contact Information</h1>
        <p className="text-gray-600">Manage contact details displayed on the website</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              value={contact.phone}
              onChange={(e) => setContact({...contact, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => setContact({...contact, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Physical Address
            </label>
            <textarea
              value={contact.address}
              onChange={(e) => setContact({...contact, address: e.target.value})}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <input
              type="url"
              value={contact.website}
              onChange={(e) => setContact({...contact, website: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Social Media Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Facebook
                </label>
                <input
                  type="url"
                  value={contact.socialMedia.facebook}
                  onChange={(e) => handleSocialLinkChange('facebook', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Twitter
                </label>
                <input
                  type="url"
                  value={contact.socialMedia.twitter}
                  onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram
                </label>
                <input
                  type="url"
                  value={contact.socialMedia.instagram}
                  onChange={(e) => handleSocialLinkChange('instagram', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn
                </label>
                <input
                  type="url"
                  value={contact.socialMedia.linkedin}
                  onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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