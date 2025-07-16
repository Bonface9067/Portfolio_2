import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Geospatial Analysis', href: '#' },
      { name: 'Emergency Response Systems', href: '#' },
      { name: 'Backend Development', href: '#' },
      { name: 'Data Science Consulting', href: '#' }
    ],
    resources: [
      { name: 'Publications', href: '#publications' },
      { name: 'Case Studies', href: '#projects' },
      { name: 'Blog', href: '#' },
      { name: 'Workshops', href: '#' }
    ],
    contact: [
      { name: 'bonfaceodhiambo291@gmail.com', href: 'mailto:bonfaceodhiambo291@gmail.com', icon: Mail },
      { name: '+254 796 358 726', href: 'tel:+254796358726', icon: Phone },
      { name: 'Nairobi, Kenya', href: '#', icon: MapPin }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'linkedin.com/in/bonface-odhiambo-17245a1ab' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Bonface9067' },
    { name: 'Portfolio', icon: ExternalLink, href: 'https://bonface-portfolio.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Bonface Odhiambo</h3>
              <p className="text-gray-400">
                Geospatial Data Scientist & Backend Developer
              </p>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming complex geospatial data into actionable insights through innovative 
              technology solutions for emergency response, agriculture, and environmental monitoring.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-200 transform hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index} className="flex items-center">
                    <Icon size={16} className="mr-3 text-gray-400" />
                    <a
                      href={contact.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {contact.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bonface Odhiambo. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400 text-sm mr-2">Made with</span>
              <Heart size={16} className="text-red-500 mr-2" />
              <span className="text-gray-400 text-sm">
                using React & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;