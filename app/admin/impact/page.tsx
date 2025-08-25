"use client";

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function ImpactAdmin() {
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/impact');
        const data = await response.json();
        if (data && !data.error) {
          setStats(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error('Error fetching impact stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStat, setNewStat] = useState({
    title: '',
    value: '',
    description: '',
    icon: '📊',
    order: stats.length + 1
  });

  const handleAddStat = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/admin/impact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStat),
      });
      const result = await response.json();
      if (response.ok) {
        setStats([...stats, result]);
        setNewStat({ title: '', value: '', description: '', icon: '📊', order: stats.length + 2 });
        setShowAddForm(false);
        toast.success('Impact stat added successfully!');
      } else {
        toast.error(result.error || 'Error adding impact stat');
      }
    } catch (error) {
      toast.error('Error adding impact stat');
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateStat = (id: string, field: string, value: string) => {
    setStats(stats.map(stat => 
      stat.id === id ? { ...stat, [field]: value } : stat
    ));
  };

  const handleDeleteStat = async (id: string) => {
    if (!confirm('Are you sure you want to delete this statistic?')) {
      return;
    }
    try {
      const response = await fetch(`/api/admin/impact?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setStats(stats.filter(stat => stat.id !== id));
        toast.success('Stat deleted successfully!');
      } else {
        toast.error('Error deleting stat');
      }
    } catch (error) {
      toast.error('Error deleting stat');
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      for (const stat of stats) {
        await fetch('/api/admin/impact', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(stat),
        });
      }
      toast.success('Changes saved successfully!');
      setIsEditing(false);
    } catch (error) {
      toast.error('Error saving changes');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Impact Stats</h1>
          <p className="mt-2 text-gray-600">
            Manage impact statistics and achievements
          </p>
        </div>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Edit Content
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
      <div className="space-y-8">
        {/* Current Statistics */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Impact Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="border border-gray-200 rounded-lg p-4 relative">
                {isEditing && (
                  <button
                    onClick={() => handleDeleteStat(stat.id)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                )}
                <div className="space-y-3">
                  {isEditing ? (
                    <input
                      type="text"
                      value={stat.icon}
                      onChange={(e) => handleUpdateStat(stat.id, 'icon', e.target.value)}
                      className="text-2xl w-16 border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <span className="text-2xl">{stat.icon}</span>
                  )}
                  
                  {isEditing ? (
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => handleUpdateStat(stat.id, 'value', e.target.value)}
                      className="text-3xl font-bold text-gray-900 w-full border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  )}
                  
                  {isEditing ? (
                    <input
                      type="text"
                      value={stat.title}
                      onChange={(e) => handleUpdateStat(stat.id, 'title', e.target.value)}
                      className="text-lg font-semibold text-gray-800 w-full border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p className="text-lg font-semibold text-gray-800">{stat.title}</p>
                  )}
                  
                  {isEditing ? (
                    <textarea
                      value={stat.description || ''}
                      onChange={(e) => handleUpdateStat(stat.id, 'description', e.target.value)}
                      className="text-sm text-gray-600 w-full border border-gray-300 rounded px-2 py-1"
                      rows={2}
                    />
                  ) : (
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Statistic */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Add New Statistic</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {showAddForm ? 'Cancel' : 'Add Statistic'}
            </button>
          </div>
          
          {showAddForm && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={newStat.title}
                    onChange={(e) => setNewStat({...newStat, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Lives Impacted"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Value
                  </label>
                  <input
                    type="text"
                    value={newStat.value}
                    onChange={(e) => setNewStat({...newStat, value: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="10,000+"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newStat.description}
                  onChange={(e) => setNewStat({...newStat, description: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="People who have benefited from our programs"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Icon (Emoji)
                  </label>
                  <input
                    type="text"
                    value={newStat.icon}
                    onChange={(e) => setNewStat({...newStat, icon: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="👥"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order
                  </label>
                  <input
                    type="number"
                    value={newStat.order}
                    onChange={(e) => setNewStat({...newStat, order: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <button
                onClick={handleAddStat}
                disabled={isSaving || !newStat.title || !newStat.value}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
              >
                {isSaving ? 'Adding...' : 'Add Statistic'}
              </button>
            </div>
          )}
        </div>
      </div>
      )}
    </div>
  );
}