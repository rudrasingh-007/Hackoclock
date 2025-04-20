import React from 'react';
import { Leaf, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-green-400 mr-2" />
              <span className="text-xl font-bold">EcoTrack</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Helping you track, understand, and reduce your carbon footprint for a more sustainable future.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#tracker" className="text-gray-400 hover:text-green-400 transition-colors">Carbon Tracker</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400">Subscribe to our newsletter for tips on sustainable living.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} EcoTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;