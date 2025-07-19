import React from 'react';
import { Building2, Users, Award, ExternalLink } from 'lucide-react';
import LocateLogo from '../../assets/images/LocateIT.jpg';
import EsriLogo from '../../assets/images/ESRI_2.png';
import MercyCorpsLogo from '../../assets/images/Mercycorps.jpg';
import ICPACLogo from '../../assets/images/ICPAC.webp';
import AgrifinLogo from '../../assets/images/Agrifin.webp';
import SASSCALLogo from '../../assets/images/Sasscal.png';
import GMESLogo from '../../assets/images/LOGO-GMES.png';

const Organizations: React.FC = () => {
  const employers = [
    {
      name: 'LocateIT Kenya Limited',
      logo: LocateLogo,
      role: 'GIS/Remote Sensing Analyst & Spatial Applications Research Expert',
      duration: '2024 - Present',
      description: 'Leading geospatial analysis and research projects',
      website: 'https://locateit.co.ke'
    },
    {
      name: 'ESRI Eastern Africa',
      logo: EsriLogo,
      role: 'Technical Intern',
      duration: '2022',
      description: 'GIS solutions development for education sector',
      website: 'https://www.esriea.com/'
    }
  ];

  const clientOrganizations = [
    {
      name: 'ICPAC',
      logo: ICPACLogo,
      description: 'IGAD Climate Prediction and Applications Centre',
      project: 'Desert Locust Outbreak Monitoring',
      website: 'https://www.icpac.net'
    },
    {
      name: 'MercyCorps ASALs',
      logo: MercyCorpsLogo,
      description: 'Arid and Semi-Arid Lands Program',
      project: 'Rangeland Management and Monitoring',
      website: 'https://www.mercycorps.org'
    },
    {
      name: 'MercyCorps AgriFin',
      logo: AgrifinLogo,
      description: 'Agricultural Finance Program',
      project: 'Flooding Impacts Analysis',
      website: 'https://mercycorpsagrifin.org/'
    },
    {
      name: 'SASSCAL',
      logo: SASSCALLogo,
      description: 'Southern African Science Service Centre for Climate Change',
      project: 'WeMAST Wetlands Monitoring System',
      website: 'https://www.sasscal.org'
    },
    {
      name: 'GMES&AFRICA',
      logo: GMESLogo,
      description: 'Global Monitoring for Environment and Security',
      project: 'Coastal Geomorphological Mapping',
      website: 'https://www.gmes-africa.org'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Organizations of Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional collaborations with leading organizations in geospatial technology, 
            climate science, and sustainable development across Africa.
          </p>
        </div>

        {/* Employers Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Building2 size={32} className="text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Employers</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {employers.map((employer, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="min-w-[80px] max-w-[120px] bg-white rounded-lg shadow-sm flex items-center justify-center mr-6 p-2">
                    <img
                      src={employer.logo}
                      alt={employer.name}
                      className="max-h-[64px] w-auto object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{employer.name}</h4>
                    <p className="text-blue-600 font-semibold mb-1">{employer.role}</p>
                    <p className="text-gray-600 text-sm">{employer.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{employer.description}</p>
                
                <button
                  onClick={() => window.open(employer.website, '_blank')}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Visit Website
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Client Organizations Section */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Users size={32} className="text-teal-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Client Organizations</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientOrganizations.map((client, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-center mb-4">
                  <div className="min-w-[64px] max-w-[96px] bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4 p-2">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-[48px] w-auto object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{client.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{client.description}</p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center mb-3">
                    <Award size={16} className="text-teal-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Project:</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{client.project}</p>
                  
                  <button
                    onClick={() => window.open(client.website, '_blank')}
                    className="w-full flex items-center justify-center text-teal-600 hover:text-teal-800 font-medium text-sm transition-colors"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Professional Network</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="text-blue-100">Employers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-blue-100">Client Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-blue-100">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-blue-100">Countries Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;