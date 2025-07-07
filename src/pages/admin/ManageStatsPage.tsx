import React, { useState, useEffect } from 'react';
import { store, Stats } from '../../data/store';
import { Save } from 'lucide-react';

const ManageStatsPage = () => {
  const [stats, setStats] = useState<Stats>(store.getStats());
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setStats(store.getStats());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStats(prev => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    store.saveStats(stats);
    
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }, 1000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Homepage Stats</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="familiesHelped" className="block text-sm font-medium text-gray-700 mb-1">
                Families Helped
              </label>
              <input
                type="number"
                id="familiesHelped"
                name="familiesHelped"
                value={stats.familiesHelped}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label htmlFor="yearsOfService" className="block text-sm font-medium text-gray-700 mb-1">
                Years of Service
              </label>
              <input
                type="number"
                id="yearsOfService"
                name="yearsOfService"
                value={stats.yearsOfService}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
             <div>
              <label htmlFor="activeVolunteers" className="block text-sm font-medium text-gray-700 mb-1">
                Active Volunteers
              </label>
              <input
                type="number"
                id="activeVolunteers"
                name="activeVolunteers"
                value={stats.activeVolunteers}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
             <div>
              <label htmlFor="projectsCompleted" className="block text-sm font-medium text-gray-700 mb-1">
                Projects Completed
              </label>
              <input
                type="number"
                id="projectsCompleted"
                name="projectsCompleted"
                value={stats.projectsCompleted}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center justify-end">
            {showSuccess && <p className="text-green-600 mr-4">Saved successfully!</p>}
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              disabled={isSaving}
            >
              <Save className="w-5 h-5 mr-2" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageStatsPage;
