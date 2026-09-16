import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rm-navy-900 text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Company Info */}
        <div className="col-span-1 lg:col-span-1">
          <div className="text-3xl font-bold italic mb-6">
            <span className="text-rm-orange-500">RM</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Established in 2013, Shanxi Ruima Trading Co., Ltd. is a vertically integrated luggage and bag supplier based in China, combining in-house R&D, manufacturing, and global trade services under one roof.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-rm-orange-500 transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-rm-orange-500 transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-rm-orange-500 transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-rm-orange-500 transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="hover:text-white cursor-pointer transition-colors">Home</li>
            <li className="hover:text-white cursor-pointer transition-colors">Products</li>
            <li className="hover:text-white cursor-pointer transition-colors">Company Profile</li>
            <li className="hover:text-white cursor-pointer transition-colors">Quality Control</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Categories</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="hover:text-white cursor-pointer transition-colors">Trolley Suitcases</li>
            <li className="hover:text-white cursor-pointer transition-colors">Student Backpacks</li>
            <li className="hover:text-white cursor-pointer transition-colors">Casual Crossbody Bags</li>
            <li className="hover:text-white cursor-pointer transition-colors">Shoulder Bags</li>
            <li className="hover:text-white cursor-pointer transition-colors">Business Luggage</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contact Info</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-rm-orange-500 shrink-0" />
              <span>Shanxi, China</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-rm-orange-500 shrink-0" />
              <span>Request Quote via Website</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-rm-orange-500 shrink-0" />
              <span>Contact Sales Team</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
        <p>© 2026 Shanxi Ruima Trading Co., Ltd. All Rights Reserved.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
