import React from 'react';
import { Award, BookOpen, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: "BSc Geoinformatics",
      description: "Graduated from Taita Taveta University with expertise in GIS, Remote Sensing, and Cartography"
    },
    {
      icon: BookOpen,
      title: "Published Research",
      description: "Co-authored research on spatio-temporal agricultural drought quantification in peer-reviewed journals"
    },
    {
      icon: Globe,
      title: "Earth Observation Expert",
      description: "Specialized in EO data processing, marine/coastal monitoring, and agricultural drought assessment"
    },
    {
      icon: Users,
      title: "Capacity Building",
      description: "Conducted training workshops on rangeland monitoring and coastal geomorphological mapping"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated GIS and Remote Sensing professional with 2+ years of experience in leveraging 
            geospatial technologies to solve environmental and socio-economic challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed text-justify">
                I am a GIS/Remote Sensing Expert with a BSc in Geoinformatics from Taita Taveta University. 
                My expertise spans Earth observation data processing, agricultural drought monitoring, 
                coastal geomorphological mapping, and rangeland management.
              </p>
              
              <p className="text-lg leading-relaxed text-justify">
                Currently working as a Spatial Applications Research Expert at LocateIT Kenya Limited, my 
                experience includes specialized work in flood impact analysis, coastal monitoring under the 
                GMES&AFRICA programme, and rangeland degradation assessment.
              </p>

              <p className="text-lg leading-relaxed text-justify">
                I am passionate about utilizing cutting-edge geospatial technologies to support sustainable 
                development, disaster risk reduction, and climate resilience across Eastern Africa. My work 
                combines technical expertise with practical applications to deliver actionable insights for 
                decision-makers and stakeholders.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                Python & Django
              </div>
              <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-semibold">
                QGIS & Remote Sensing
              </div>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Agricultural Monitoring
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                Coastal Mapping
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;