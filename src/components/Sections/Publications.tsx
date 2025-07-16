import React, { useState } from 'react';
import { BookOpen, ExternalLink, Calendar, Award, Users, Filter, Presentation } from 'lucide-react';

const Publications: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const publications = [
    {
      id: 'agricultural-drought-2024',
      title: 'Spatio-Temporal Agricultural Drought Quantification in a Rainfed Agriculture, Athi-Galana-Sabaki River Basin',
      type: 'publication',
      description: 'Research on developing a spatio-temporal agricultural drought monitoring system for the Athi-Galana basin to track drought conditions and provide early warning systems.',
      date: '2024',
      venue: 'Journal of Geographic Information System, Volume 16',
      url: 'https://doi.org/10.4236/jgis.2024.164013',
      authors: ['Tete, J.', 'Makokha, G.', 'Ngesa, O.', 'Muthami, J.', 'Odhiambo, B.'],
      abstract: 'This study developed a comprehensive agricultural drought monitoring system using satellite imagery and agro-meteorological models. The research focused on creating index computation algorithms including Temperature Condition Index, Vegetation Condition Index, Precipitation Index, and Agricultural Drought Index for the Athi-Galana-Sabaki River Basin.',
      keywords: ['Agricultural Drought', 'Remote Sensing', 'Spatio-temporal Analysis', 'Early Warning Systems']
    }
  ];

  const workshops = [
    {
      id: 'kenya-space-bill-2024',
      title: 'Kenya Space Bill Review - Stakeholder Engagement',
      type: 'workshop',
      description: 'Representative of LocateIT_KE for the review of the Kenya Space Bill, shaping the future of space policy in Kenya.',
      date: 'November 2024',
      venue: 'Kenya Space Agency, Nairobi',
      participants: 'Industry stakeholders and space sector professionals',
      abstract: 'Participated in critical review session for the draft Kenya Space Bill hosted by the Kenya Space Agency. The engagement focused on empowering stakeholders in the space sector and fostering innovation, collaboration, and growth across industries reliant on space-based solutions. The Bill\'s provisions support space activities and address unique needs of Kenya\'s growing space industry.',
      keywords: ['Space Policy', 'Kenya Space Bill', 'Earth Observation', 'Industry Stakeholder Engagement'],
      linkedinUrl: 'https://www.linkedin.com/posts/bonface-odhiambo-17245a1ab_locateit-kenyaspacebill-earthobservation-activity-7258516042174382081-J9mX'
    },
    {
      id: 'rangeland-training-2024',
      title: 'Rangeland Monitoring and Management Training',
      type: 'workshop',
      description: 'Training workshop on manipulation of Earth observation datasets for rangelands monitoring and management.',
      date: 'November 18-19, 2024',
      venue: 'Garissa University',
      participants: 'Students and county officials',
      abstract: 'Comprehensive training program covering practical applications of Earth observation data for rangeland monitoring, including hands-on sessions with satellite data processing and analysis tools for sustainable rangeland management.',
      keywords: ['Rangeland Management', 'Earth Observation', 'Capacity Building', 'Training'],
      linkedinUrl: 'https://www.linkedin.com/posts/bonface-odhiambo-17245a1ab_gis-earthobservation-sustainability-activity-7265422971874254849-1Kgg'
    },
    {
      id: 'desert-locust-steering-committee-2024',
      title: 'The 6th Steering Committee Meeting for Inter-regional Platform for the Sustainable Management of Desert Locusts',
      type: 'presentation',
      description: 'Presented progress on desert locust predictive models development as LocateIT representative in ICPAC consultancy.',
      date: 'February 2025',
      venue: 'Ole Sereni Hotel, Nairobi, Kenya',
      participants: 'Regional stakeholders and pest management experts',
      abstract: 'Presented progress on development of Locust breeding Suitability predictive models for predicting desert locust breeding suitability along the horn of Africa, and Vegetation onset and desert locust stay duration predictive model. The meeting focused on strengthening regional collaboration, improving data collection & analysis, integrating technologies like drones & AI, and enhancing preparedness & response capabilities for transboundary pest management.',
      keywords: ['Desert Locust', 'Predictive Modeling', 'Regional Collaboration', 'Pest Management']
    },
    {
      id: 'coastal-training-2024',
      title: 'End User Workshop Training on Coastal Geomorphological Mapping and Shoreline Change Analysis',
      type: 'workshop',
      description: 'Training workshop on coastal monitoring tools and methodologies for stakeholders and end-users.',
      date: 'February 7-9, 2024',
      venue: 'LocateIT, Nairobi, Kenya',
      participants: 'Coastal monitoring stakeholders',
      abstract: 'Intensive workshop covering the use of developed coastal monitoring tools and products, including methodologies for shoreline extraction, trend analysis, and coastal change assessment using remote sensing and GIS techniques.',
      keywords: ['Coastal Monitoring', 'Shoreline Analysis', 'Training', 'Stakeholder Engagement']
    },
    {
      id: 'biodiversity-presentation-2023',
      title: 'Storytelling for Biodiversity Conservation using GIS/Remote Sensing Technology',
      type: 'presentation',
      description: 'Oral presentation on leveraging geospatial technologies for biodiversity conservation storytelling.',
      date: 'October 5-6, 2023',
      venue: '4th Biennial International CEMEREM Conference, Sarova Whitesands Hotel, Mombasa, Kenya',
      theme: 'The Future of Mining and Natural Resources in Africa',
      abstract: 'Presentation focused on innovative approaches to biodiversity conservation through effective storytelling using GIS and remote sensing technologies, demonstrating practical applications in natural resource management.',
      keywords: ['Biodiversity Conservation', 'GIS', 'Remote Sensing', 'Environmental Storytelling'],
      WorkshopUrl: 'https://storymaps.arcgis.com/stories/cd4be5d84d404c07b963167cfda8a431',
    }
  ];

  const allItems = [
    ...publications.map(item => ({ ...item, category: 'publication' })),
    ...workshops.map(item => ({ ...item, category: 'workshop' }))
  ];

  const filteredItems = filter === 'all' 
    ? allItems 
    : allItems.filter(item => item.type === filter);

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications & Workshops</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the advancement of geospatial science through research publications, 
            conference presentations, and knowledge sharing workshops.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Filter size={20} className="mr-2" />
            All
          </button>
          <button
            onClick={() => setFilter('publication')}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filter === 'publication'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BookOpen size={20} className="mr-2" />
            Publications
          </button>
          <button
            onClick={() => setFilter('workshop')}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filter === 'workshop'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Award size={20} className="mr-2" />
            Workshops
          </button>
          <button
            onClick={() => setFilter('presentation')}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filter === 'presentation'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Presentation size={20} className="mr-2" />
            Presentations
          </button>
        </div>

        {/* Publications and Workshops Grid */}
        <div className="space-y-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      item.type === 'publication' ? 'bg-blue-100' : 
                      item.type === 'workshop' ? 'bg-teal-100' : 'bg-orange-100'
                    }`}>
                      {item.type === 'publication' ? (
                        <BookOpen size={24} className="text-blue-600" />
                      ) : item.type === 'workshop' ? (
                        <Award size={24} className="text-teal-600" />
                      ) : (
                        <Presentation size={24} className="text-orange-600" />
                      )}
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        item.type === 'publication' 
                          ? 'bg-blue-100 text-blue-800' 
                          : item.type === 'workshop'
                          ? 'bg-teal-100 text-teal-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {item.type === 'publication' ? 'Journal Paper' : 
                         item.type === 'workshop' ? 'Workshop' : 'Conference Presentation'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {item.type === 'publication' ? 'Published in:' : 
                     item.type === 'workshop' ? 'Venue:' : 'Presented at:'}
                  </p>
                  <p className="text-blue-600 font-medium">{item.venue}</p>
                </div>

                {item.authors && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Authors:</p>
                    <div className="flex items-center">
                      <Users size={16} className="text-gray-400 mr-2" />
                      <span className="text-gray-600">{item.authors.join(', ')}</span>
                    </div>
                  </div>
                )}

                {item.participants && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Participants:</p>
                    <div className="flex items-center">
                      <Users size={16} className="text-gray-400 mr-2" />
                      <span className="text-gray-600">{item.participants}</span>
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Abstract:</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.abstract}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Keywords:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  {item.url ? (
                    <button
                      onClick={() => window.open(item.url, '_blank')}
                      className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Publication
                    </button>
                  ) : item.linkedinUrl ? (
                    <button
                      onClick={() => window.open(item.linkedinUrl, '_blank')}
                      className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View LinkedIn Post
                    </button>
                  ) : item.WorkshopUrl ? (
                    <button
                      onClick={() => window.open(item.WorkshopUrl, '_blank')}
                      className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Presentation
                    </button>
                  ) : (
                    <div className="flex items-center px-6 py-2 bg-gray-100 text-gray-500 rounded-lg">
                      <Award size={16} className="mr-2" />
                      Workshop/Presentation
                    </div>
                  )}
                  <div className="text-sm text-gray-500">
                    {item.type === 'publication' ? 'Peer-reviewed' : 'Professional training'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Focus Areas */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Research & Training Focus Areas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Agricultural Monitoring</h4>
              <p className="text-gray-600 text-sm">
                Drought quantification, crop monitoring, and agricultural resilience systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Coastal Dynamics</h4>
              <p className="text-gray-600 text-sm">
                Shoreline change analysis, coastal erosion monitoring, and geomorphological mapping
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Capacity Building</h4>
              <p className="text-gray-600 text-sm">
                Training workshops on Earth observation, GIS applications, and rangeland management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;