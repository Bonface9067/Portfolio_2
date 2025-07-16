import React, { useState, useEffect } from 'react';
import { Calendar, Award, Briefcase, Users, Code, Plus } from 'lucide-react';
import { supabase } from '../../lib/supabase'; // Correct import path based on your structure

const PortfolioUpdates: React.FC = () => {
  const [updates, setUpdates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const { data, error: fetchError } = await supabase
          .from('portfolio_updates')
          .select('*')
          .order('date', { ascending: false }) // Newest first
          .limit(3); // Only 3 most recent

        if (fetchError) {
          throw fetchError;
        }

        // Handle UUID format from database
        setUpdates(data?.map(update => ({
          ...update,
          id: update.id.toString() // Ensure ID is string for React key
        })) || []);
      } catch (err) {
        console.error('Error fetching updates:', err);
        setError('Failed to load portfolio updates');
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return Award;
      case 'collaboration':
        return Users;
      case 'experience':
        return Briefcase;
      case 'project':
        return Code;
      default:
        return Plus;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'bg-yellow-100 text-yellow-600';
      case 'collaboration':
        return 'bg-purple-100 text-purple-600';
      case 'experience':
        return 'bg-blue-100 text-blue-600';
      case 'project':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with my latest achievements, collaborations, and professional milestones.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading updates...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="bg-red-50 text-red-700 p-4 rounded-lg inline-block">
              <p>{error}</p>
              <p className="text-sm mt-2">Showing placeholder data instead</p>
            </div>
          </div>
        ) : updates.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-yellow-50 text-yellow-700 p-4 rounded-lg inline-block">
              <p>No portfolio updates found</p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {updates.map((update) => {
              const Icon = getIcon(update.type);
              return (
                <div
                  key={update.id} // UUID works perfectly as key
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getIconColor(update.type)}`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {update.title}
                          </h3>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar size={16} className="mr-1" />
                            {formatDate(update.date)}
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {update.description}
                        </p>
                        <div className="mt-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${
                            update.type === 'certification' ? 'bg-yellow-100 text-yellow-800' :
                            update.type === 'collaboration' ? 'bg-purple-100 text-purple-800' :
                            update.type === 'experience' ? 'bg-blue-100 text-blue-800' :
                            update.type === 'project' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {update.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Stats Summary - Remains static */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Recent Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-sm text-gray-600">New Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-sm text-gray-600">Active Collaborations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
              <div className="text-sm text-gray-600">Speaking Engagements</div>
            </div>
          </div>
        </div>

        {/* Subscribe for Updates */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6">
            Get notified about new projects, publications, and professional milestones.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Subscribe to Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioUpdates;