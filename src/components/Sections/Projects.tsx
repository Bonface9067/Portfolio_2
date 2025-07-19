import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Code, X } from 'lucide-react';

// Corrected image imports
import Locust from '../../assets/images/LOCUST.png';
import Jiji from '../../assets/images/JIJI_LETU.png';
import Wemast from '../../assets/images/WEMAST.png';
import Ramdss from '../../assets/images/RAMDSS.png';
import Cogeos from '../../assets/images/COGEOS.jpg';
import Flood from '../../assets/images/FLOODING.png';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'jiji-letu',
      title: 'JIJI LETU Emergency Response System',
      description: 'Real-time emergency response and crisis management platform',
      longDescription: `JIJI LETU is a comprehensive emergency response system that revolutionizes how emergency services respond to crises. The system integrates real-time location tracking, automated dispatch, and comprehensive incident management to reduce response times and help save lives.

      The platform features advanced geospatial analysis capabilities, real-time communication tools, and predictive analytics to anticipate and prevent emergencies. Built with scalability in mind, it serves communities across multiple regions with efficient emergency coordination.

      Key innovations include automated alert systems, mobile-first design for field operatives, integration of an AI assistance to provide step by step FirstAID guidance to first responders and integration with existing emergency infrastructure..`,
      technologies: ['Django', 'PostgreSQL', 'Redis', 'Leaflet', 'WebSocket', 'Docker', 'Python'],
      imageUrl: Jiji,
      client: 'Innovation',
      year: '2024',
      featured: true,
      category: 'emergency',
      stats: {
        platform: 'Real-time System',
        features: 'Multi-agency Coordination',
        technology: 'Django Framework'
      }
    },
    {
      id: 'agricultural-drought-monitoring',
      title: 'Spatio-Temporal Agricultural Drought Monitoring',
      description: 'Agricultural drought monitoring system for Athi-Galana-Sabaki River Basin',
      longDescription: `A comprehensive agricultural drought monitoring system developed for the Athi-Galana-Sabaki River Basin to track drought conditions over time and space. The system provides early warning capabilities to farmers and stakeholders, enabling timely interventions to mitigate drought impacts.

      The platform integrates satellite imagery data curation, index computation algorithms, and statistical analysis to provide accurate drought assessments. Key indices include Temperature Condition Index, Vegetation Condition Index, Precipitation Index, and Agricultural Drought Index.

      The system features a Django-based web platform and includes a QGIS plugin for professional users, providing access to analysis-ready data and statistical presentations based on regions of interest. This climate resilience platform supports data-driven decision making for agricultural stakeholders.`,
      technologies: ['Django', 'Python', 'QGIS', 'Satellite Imagery', 'Statistical Analysis', 'Web Development'],
      imageUrl: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
      client: 'Taita Taveta University',
      year: '2023',
      featured: false,
      category: 'agriculture',
      stats: {
        coverage: 'Athi-Galana-Sabaki Basin',
        indices: '4 Drought Indices',
        platform: 'Web + QGIS Plugin'
      }
    },
    {
      id: 'wemasst-wetlands',
      title: 'Wetlands Monitoring and Assessment Service for Transboundary Basins (WeMAST)',
      description: 'Wetland monitoring system for transboundary River Basins in Southern Africa',
      longDescription: `LocateIT was part of a consortium of companies (TSC, GIDEA and GSC) contracted by SASSCAL to develop a comprehensive wetland monitoring system. The WeMAST geoportal and mobile application provide monitoring and assessment capabilities for four transboundary River Basins: Cuvelai, Okavango, Limpopo, and Zambezi.

      The web service enhances user interactivity and information retrieval on wetland state and health. WeMAST geoportal provides easy access to Analysis Ready Spatial Data (ARSD) including Land Use Land Cover (LULC), vegetation cover data, water quality, water extent, and resilience indicators such as flood susceptibility areas.

      The platform features multi-temporal layer comparison capabilities, QGIS plugin development for wetland assessment and monitoring, comprehensive tutorials and training materials, and extensive capacity building for stakeholders and end-users.`,
      technologies: ['QGIS Plugin Development', 'GeoServer', 'Web Development', 'Spatial Data Management', 'Training Materials', 'Capacity Building'],
      imageUrl: Wemast,
      site_url: 'http://gmes2-geoportal.sasscal.org/',
      client: 'SASSCAL',
      year: '2020-2023',
      featured: true,
      category: 'wetlands',
      stats: {
        basins: '4 Transboundary Basins',
        platform: 'Web + Mobile + QGIS Plugin',
        consortium: 'Multi-company Project'
      }
    },
    {
      id: 'flooding-impacts-analysis',
      title: 'Geospatial Analysis of Flooding Impacts on Agriculture and Infrastructure',
      description: 'Flood impact assessment for agricultural production and infrastructure in Kenya',
      longDescription: `This project assessed the extent and impact of flooding on agricultural production and infrastructure in Kenya to support MercyCorps AgriFin's mission of enhancing financial inclusion and resilience for smallholder farmers. The analysis provided actionable insights into flood effects on key agricultural zones.

      The project involved comprehensive data collection from satellite imagery, hydrological models, and published resources. Advanced GIS and remote sensing techniques were used to develop flood maps and impact assessments showing effects on agricultural production and infrastructure.

      The analysis included phased assessment identifying flooded areas, correlation with agricultural production data, and directed assessment of counties with significant flood impacts. Comprehensive reports and mapographics were developed for stakeholder communication.`,
      technologies: ['GIS', 'Remote Sensing', 'Satellite Imagery', 'Hydrological Models', 'Spatial Analysis', 'Mapographics'],
      imageUrl: Flood,
      client: 'MercyCorps AgriFin',
      year: '2024',
      featured: false,
      category: 'agriculture',
      stats: {
        scope: 'National Assessment',
        focus: 'Agricultural Zones',
        output: 'Flood Impact Maps'
      }
    },
    {
      id: 'desert-locust-monitoring',
      title: 'Desert Locust Outbreak Monitoring and Prediction System',
      description: 'Methodology development for establishing different states of desert locust outbreaks',
      longDescription: `This project focuses on supporting ICPAC in improving decision-making capabilities by developing robust methodologies and systems for desert locust monitoring. The initiative leverages scientific research, remote sensing technologies, and technical expertise to strengthen early warning systems and optimize response strategies.

      The project involves integration of historical records, real-time field observations, satellite imagery, and agro-meteorological models for comprehensive locust monitoring. Advanced predictive modeling includes development of Locust breeding Suitability models and Vegetation onset and desert locust stay duration models.

      Key innovations include establishment of criteria to distinguish locust outbreak stages (breeding, hopper bands, and swarming) and validation using historical data and real-time observations. The system aims to mitigate socio-economic impacts caused by locust invasions across the Horn of Africa.`,
      technologies: ['Remote Sensing', 'Predictive Modeling', 'Satellite Imagery', 'Agro-meteorological Models', 'Machine Learning', 'GIS'],
      imageUrl: Locust,
      client: 'ICPAC',
      year: '2025',
      featured: false,
      category: 'monitoring',
      stats: {
        coverage: 'Horn of Africa',
        models: '2 Predictive Models',
        stages: '3 Outbreak Stages'
      }
    },
    {
      id: 'coastal-monitoring',
      title: 'Coastal Geomorphological Mapping and Shoreline Change Analysis',
      description: 'Coastal monitoring platform for eastern Africa Indian Ocean Island countries',
      longDescription: `Executed under the GMES&AFRICA programme, this project developed tools and a platform for monitoring coastal changes in Mauritius, Comoros, Madagascar, and Seychelles. The web platform delivers timely information on shoreline positional shifts and coastal erosion dynamics.

      The project involved automation of shoreline extraction from remote sensing data using machine learning and digital image processing techniques. Implementation included shoreline trend mapping and analysis using mathematical algorithms to provide insights on coastal change drivers.

      A QGIS plugin was developed as an integrated analysis tool providing analysis components for customary and professional users to support decision making. The project included comprehensive capacity building trainings and technical documentation for stakeholders and end-users.`,
      technologies: ['Machine Learning', 'Digital Image Processing', 'QGIS', 'Remote Sensing', 'Mathematical Algorithms', 'Web Platform'],
      imageUrl: Cogeos,
      site_url: 'http://coastalerosion.rcmrd.org/',
      client: 'GMES&AFRICA',
      year: '2024',
      featured: false,
      category: 'coastal',
      stats: {
        countries: '4 Island Nations',
        tools: 'Web Platform + QGIS Plugin',
        focus: 'Shoreline Analysis'
      }
    },
    {
      id: 'rangeland-management',
      title: 'Rangeland Management and Monitoring Tools',
      description: 'Assessment of rangeland degradation in Wajir and Garissa counties',
      longDescription: `This project focuses on assessing the extent and impacts of rangeland degradation in Wajir and Garissa counties to improve rangeland management and support the sustainability of pastoralist livelihoods. The approach combines remote sensing, GIS techniques, and traditional knowledge.

      The project involves comprehensive data collection from satellite imagery and agro-meteorological models, along with field data collection of invasive species (prosopis juliflora and acacia reficiens). Advanced processing produces clean, pre-processed remote sensing and GIS datasets for accurate rangeland monitoring.

      Key outputs include detailed rangeland maps highlighting vegetation states, water resources, and degraded areas. Impact maps assess rangeland degradation patterns to provide actionable insights for data-driven decision-making, sustainable resource management, and long-term rangeland regeneration.`,
      technologies: ['Remote Sensing', 'GIS', 'Satellite Imagery', 'Field Data Collection', 'Agro-meteorological Models', 'Spatial Analysis'],
      imageUrl: Ramdss,
      site_url: 'http://107.191.43.246:3001/',
      client: 'LocateIT Kenya Limited',
      year: '2024',
      featured: false,
      category: 'rangeland',
      stats: {
        counties: '2 Counties',
        species: 'Invasive Species Mapping',
        focus: 'Pastoralist Livelihoods'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'emergency', name: 'Emergency Response' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'wetlands', name: 'Wetlands Monitoring' },
    { id: 'monitoring', name: 'Environmental Monitoring' },
    { id: 'coastal', name: 'Coastal Analysis' },
    { id: 'rangeland', name: 'Rangeland Management' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformative geospatial solutions that drive real-world impact across 
            emergency response, agriculture, and environmental monitoring.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Fixed: Added actual image display */}
              <div className="h-48 relative overflow-hidden">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-full h-full" />
                )}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {project.client}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                  >
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    {project.site_url && (
                      <a
                        href={project.site_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Projects</h3>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Fixed: Added actual image display */}
                <div className="h-32 relative">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-full h-full" />
                  )}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-600">
                    {project.year}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                  <p className="text-xs text-blue-600 font-medium mb-3">{project.client}</p>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-4">{selectedProject.client}</span>
                      <Calendar size={16} className="mr-1" />
                      <span>{selectedProject.year}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  {/* Fixed: Added actual image display */}
                  <div className="h-64 rounded-lg mb-4 overflow-hidden">
                    {selectedProject.imageUrl ? (
                      <img 
                        src={selectedProject.imageUrl} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-full h-full" />
                    )}
                  </div>
                </div>

                <div className="prose prose-gray max-w-none mb-6">
                  {selectedProject.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Project Stats</h4>
                    <div className="space-y-2">
                      {Object.entries(selectedProject.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 capitalize">{key}:</span>
                          <span className="font-medium text-gray-900">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4 border-t">
                  {/* Added live site URL functionality */}
                  {selectedProject.site_url && (
                    <a 
                      href={selectedProject.site_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </a>
                  )}
                  <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <Github size={16} className="mr-2" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;