import React, { useState } from 'react';
import { MapPin, Calendar, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import LocateLogo from '../../assets/images/LocateIT.jpg';
import EsriLogo from '../../assets/images/ESRI_2.png';
import TTULogo from '../../assets/images/Taita-Taveta-University.webp';

const Experience: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const workExperience = [
    {
      id: 'locateit-current',
      company: 'LocateIT Kenya Limited',
      position: 'Spatial Applications Research Expert',
      duration: 'January 2025 - Present',
      location: 'Nairobi, Kenya',
      logo: LocateLogo,
      companyUrl: 'https://locateit.co.ke',
      description: 'Developing methodologies and validation criteria for establishing different states of desert locust outbreaks in collaboration with ICPAC.',
      achievements: [
        'Technical proposal formulation and project inception reporting',
        'Integration of historical records, real-time field observations, and satellite imagery',
        'Development of Locust breeding Suitability predictive models for predicting desert locust breeding suitability along the horn of Africa',
        'Development of Vegetation onset and desert locust stay duration predictive model',
        'Development and validation of predictive models for locust outbreak patterns',
        'Establishment of criteria to distinguish locust outbreak stages (breeding, hopper bands, swarming)'
      ]
    },
    {
      id: 'locateit',
      company: 'LocateIT Kenya Limited',
      position: 'GIS/Remote Sensing Analyst',
      duration: 'January 2024 - December 2024',
      location: 'Nairobi, Kenya',
      logo: LocateLogo,
      companyUrl: 'https://locateit.co.ke',
      description: 'Specialized in leveraging geospatial technologies to address complex environmental and socio-economic challenges.',
      achievements: [
        'Collected, processed, and analyzed spatial data from satellite imagery and field surveys',
        'Developed detailed maps and impact assessments for flood and rangeland monitoring',
        'Provided technical support in integrating geospatial data into decision support systems',
        'Facilitated capacity-building workshops for stakeholders and prepared comprehensive project reports'
      ]
    },
    {
      id: 'ttu-consultant',
      company: 'Taita Taveta University',
      position: 'GIS/Remote Sensing Consultant',
      duration: 'April 2023 - August 2023',
      location: 'Taita Taveta, Kenya',
      logo: TTULogo,
      companyUrl: 'https://www.ttu.ac.ke',
      description: 'Developed a spatio-temporal agricultural drought monitoring system for the Athi-Galana-Sabaki River Basin.',
      achievements: [
        'Data curation of satellite imagery for agricultural drought analysis',
        'Development of index computation algorithms (Temperature Condition Index, Vegetation Condition Index, Precipitation Index, Agricultural Drought Index)',
        'Normalization and classification of agricultural drought findings',
        'Development of integrated agricultural drought monitoring system using Django framework and Python',
        'Validation of spatio-temporal agricultural drought index statistical outputs',
        'Development of QGIS plugin for professional users and stakeholders'
      ]
    },
    {
      id: 'esri',
      company: 'ESRI Eastern Africa',
      position: 'Technical Intern',
      duration: 'April 2022 - July 2022',
      location: 'Nairobi, Kenya',
      logo: EsriLogo,
      companyUrl: 'https://www.esriea.com/',
      description: 'Developed GIS solutions for education and sporting sector management in the Competency-Based Curriculum system.',
      achievements: [
        'Developed intelligence-based tools for student placement prediction',
        'Created web apps and web maps utilizing earth observation data',
        'Conducted suitability analysis on schools for senior secondary school channel adoption',
        'Created data collection apps for school registration and sporting facility monitoring'
      ]
    }
  ];

  const consultancyProjects = [
    {
      title: 'Coastal Geomorphological Mapping - GMES&AFRICA Programme',
      duration: 'September 2023 - February 2024',
      description: 'Developed tools and platform for monitoring coastal changes in eastern Africa Indian Ocean Island countries under LocateIT implementation.'
    },
    {
      title: 'Geospatial Analysis of Flooding Impacts - MercyCorps AgriFin', 
      duration: 'August 2024 - September 2024',
      description: 'Assessed flooding impacts on agriculture and infrastructure in Kenya to support financial inclusion for smallholder farmers.'
    },
    {
      title: 'Rangeland Management and Monitoring Tools',
      duration: 'November 2024 - Present',
      description: 'Assessing rangeland degradation in Wajir and Garissa counties to improve management and support pastoralist livelihoods.'
    }
  ];

  const toggleExpanded = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2+ years of experience in geospatial analysis, remote sensing, and Earth observation 
            applications across diverse environmental and agricultural projects.
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-8 mb-16">
          {workExperience.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                      <div className="flex items-center text-blue-600 font-semibold">
                        <span>{job.company}</span>
                        <ExternalLink size={16} className="ml-1" />
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Calendar size={16} className="mr-1" />
                        <span className="mr-4">{job.duration}</span>
                        <MapPin size={16} className="mr-1" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpanded(job.id)}
                    className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {expandedJob === job.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                </div>

                <p className="text-gray-700 mt-4">{job.description}</p>

                {expandedJob === job.id && (
                  <div className="mt-6 border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Consultancy Projects */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Key Consultancy Projects
          </h3>
          <div className="space-y-6">
            {consultancyProjects.map((project, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-600 pl-6 py-4"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-sm text-blue-600 mb-2">{project.duration}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;