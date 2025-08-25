"use client";

import { useState } from 'react';

interface HeroContent {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl?: string;
}

export default function AdminHeroClient({ initialContent, onSubmitAction }: { initialContent: HeroContent, onSubmitAction: (formData: FormData) => Promise<void> }) {
  const [content, setContent] = useState<HeroContent>({
    title: initialContent?.title || '',
    subtitle: initialContent?.subtitle || '',
    description: initialContent?.description || '',
    buttonText: initialContent?.buttonText || '',
    buttonLink: initialContent?.buttonLink || '',
    imageUrl: initialContent?.imageUrl || ''
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      const formData = new FormData(e.currentTarget);
      if (initialContent?.id) formData.set('id', initialContent.id);
      await onSubmitAction(formData);
      setMessage('Hero content updated successfully!');
    } catch (error) {
      console.error('Error saving hero content:', error);
      setMessage('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContent(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Hero Section</h1>
        <p className="mt-2 text-gray-600">
          Edit the main banner content that appears at the top of your website
        </p>
      </div>

      {message && (
        <div className={`mb-6 p-4 rounded-md ${
          message.includes('Error') 
            ? 'bg-red-50 text-red-700 border border-red-200' 
            : 'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {message}
        </div>
      )}

      <div className="bg-white shadow rounded-lg">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <input type="hidden" name="id" defaultValue={initialContent?.id || ''} />
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={content.title}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter hero title"
              required
            />
          </div>

          <div>
            <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
              Subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              value={content.subtitle}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter hero subtitle"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              value={content.description}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter hero description"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="buttonText" className="block text-sm font-medium text-gray-700">
                Button Text
              </label>
              <input
                type="text"
                name="buttonText"
                id="buttonText"
                value={content.buttonText}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g., Get Involved"
                required
              />
            </div>

            <div>
              <label htmlFor="buttonLink" className="block text-sm font-medium text-gray-700">
                Button Link
              </label>
              <input
                type="text"
                name="buttonLink"
                id="buttonLink"
                value={content.buttonLink}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g., #contact or /donate"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
              Image URL (Optional)
            </label>
            <input
              type="url"
              name="imageUrl"
              id="imageUrl"
              value={content.imageUrl || ''}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>

      {/* Preview */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-2">{content.title || 'Hero Title'}</h1>
            <h2 className="text-xl mb-4 opacity-90">{content.subtitle || 'Hero Subtitle'}</h2>
            <p className="text-lg mb-6 opacity-80">
              {content.description || 'Hero description will appear here...'}
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {content.buttonText || 'Button Text'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
