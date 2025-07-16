import React from 'react';
import { ArrowDown, MapPin, Globe, Download } from 'lucide-react';
// Import your professional image
import ProfessionalImage from '../../assets/images/PROFFESSIONAL.jpg'; // Update with your actual image path

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Earth Observation Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-teal-800/90 z-10"></div>
        
        {/* Earth observation satellite imagery background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        ></div>
        
        {/* Animated satellite data overlay pattern */}
        <div className="absolute inset-0 opacity-20 z-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,119,198,0.3),_transparent_50%),radial-gradient(circle_at_40%_40%,_rgba(120,219,255,0.3),_transparent_50%)]"></div>
        </div>

        {/* Floating data points animation */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 p-1">
              <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-2 border-white/20">
                {/* Replaced "BO" with your professional image */}
                <img 
                  src={ProfessionalImage} 
                  alt="Bonface Odhiambo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            <span className="block">Bonface Odhiambo</span>
            <span className="block text-3xl md:text-4xl text-blue-200 mt-2">
              Spatial Applications & Research Expert
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Leveraging geospatial technologies and Earth observation data to address complex 
            environmental and socio-economic challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center text-blue-200">
              <MapPin size={20} className="mr-2" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center text-blue-200">
              <Globe size={20} className="mr-2" />
              <span>2+ Years Experience</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <a
              href="https://linkedin.com/in/bonface-odhiambo-17245a1ab"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 flex items-center"
            >
              <Download size={20} className="mr-2" />
              View LinkedIn
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-bounce z-20"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;