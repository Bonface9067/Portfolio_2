import React, { useState } from 'react';
import { Code, Database, Cloud, Map, Settings, ChevronDown } from 'lucide-react';
import pythonLogo from '../../assets/images/python_logo.jpg';
import djangoLogo from '../../assets/images/Django.jpg';
import html5Logo from '../../assets/images/HTML5.jpg';
import javascriptLogo from '../../assets/images/Javascript.jpg';
import cssLogo from '../../assets/images/CSS3.jpg';
import leafletLogo from '../../assets/images/leaflet.webp';

import arcgisLogo from '../../assets/images/ArcGIS.jpg';
import arcgisProLogo from '../../assets/images/ArcGIS_Pro.webp';
import arcgisOnlineLogo from '../../assets/images/ArcGIS_Online_2.png';
import qgisLogo from '../../assets/images/QGIS.png';
import googleEarthEngineLogo from '../../assets/images/GoogleEarthEngine_2.png';

import remoteSensingLogo from '../../assets/images/remotesensing-logo.png';
import cartographyLogo from '../../assets/images/cartography.webp';
import geoaiLogo from '../../assets/images/GeoAI.webp';
import microsoft365Logo from '../../assets/images/Microsft365_2.jpg';
import earthObservationLogo from '../../assets/images/Earth_observation.png';


const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: Settings },
    { id: 'programming', name: 'Programming', icon: Code },
    { id: 'geospatial', name: 'Geospatial', icon: Map },
    { id: 'tools', name: 'Tools & Platforms', icon: Database },
  ];

  const skills = [
    { name: 'Python', category: 'programming', proficiency: 90, logo: pythonLogo },
    { name: 'Django', category: 'programming', proficiency: 85, logo: djangoLogo },
    { name: 'HTML5', category: 'programming', proficiency: 80, logo: html5Logo },
    { name: 'Javascript', category: 'programming', proficiency: 80, logo: javascriptLogo },
    { name: 'CSS', category: 'programming', proficiency: 75, logo: cssLogo },
    { name: 'Leaflet', category: 'programming', proficiency: 85, logo: leafletLogo},
    { name: 'ArcGIS', category: 'tools', proficiency: 94, logo: arcgisLogo },
    { name: 'ArcGIS Pro', category: 'tools', proficiency: 93, logo: arcgisProLogo},
    { name: 'ArcGIS Online', category: 'tools', proficiency: 92, logo: arcgisOnlineLogo },
    { name: 'QGIS', category: 'tools', proficiency: 89, logo: qgisLogo},
    { name: 'Google Earth Engine', category: 'tools', proficiency: 82, logo: googleEarthEngineLogo},
    { name: 'Remote Sensing', category: 'geospatial', proficiency: 90, logo: remoteSensingLogo},
    { name: 'Cartography', category: 'geospatial', proficiency: 88, logo: cartographyLogo},
    { name: 'GEOAI (AI&ML)', category: 'geospatial', proficiency: 85, logo: geoaiLogo },
    { name: 'Microsoft 365', category: 'tools', proficiency: 85, logo: microsoft365Logo },
    { name: 'Earth Observation', category: 'geospatial', proficiency: 92, logo: earthObservationLogo },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in geospatial technologies, programming, and Earth observation 
            data processing for environmental and agricultural applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon size={20} className="mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mr-4">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  <p className="text-sm text-gray-600 capitalize">{skill.category}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Qualifications */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Main Qualifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Geographic Information Systems (GIS)',
              'Earth Observation and Cartography',
              'EO Data Processing',
              'Marine/Coastal Environment Monitoring',
              'Agricultural Drought Monitoring',
              'Disaster Monitoring and Impact Assessment'
            ].map((qualification, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-800 font-medium">{qualification}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-8 bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Language Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Kiswahili</div>
              <div className="text-sm text-gray-600">Mother Tongue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">English</div>
              <div className="text-sm text-gray-600">Proficient User</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;