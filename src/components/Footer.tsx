import React from 'react';
import { Heart, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-400 font-sans pt-16 pb-8 relative overflow-hidden" id="page-footer">
      {/* Visual top border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-blue-500 to-purple-600" />
      <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          
          {/* Column 1: Organization brand summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500 font-bold text-white text-sm select-none">
                In
              </span>
              <span className="text-xl font-bold font-display text-white select-none">
                InAmigos Foundation
              </span>
            </div>
            
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mt-2 italic font-medium">
              "Uniting Minds for Change"
            </p>
            
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              We are a dedicated group of micro-leaders and grassroots activists committed to delivering green sustainability, rural digital learning, and supporting critical diagnostics in Chhattisgarh, India.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-sans">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
              <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-orange-400 transition-colors">Home</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-orange-400 transition-colors">About Us</a>
              <a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-orange-400 transition-colors">Programs</a>
              <a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')} className="hover:text-orange-400 transition-colors">Gallery</a>
              <a href="#blog" onClick={(e) => handleLinkClick(e, 'blog')} className="hover:text-orange-400 transition-colors">Blog</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-orange-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Column 3: External Support details / Quick Quote */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-sans animate-pulse">Our Commitment</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Registered under the societies & trusts regulations in India. Driven by active youth, fully transparent, audits conducted quarterly. Together we establish real, measurable local impact.
            </p>
            <div className="flex gap-2.5 pt-1">
              {['Orange Action', 'Vibrant Green', 'Ocean Progress', 'Unified Dignity', 'Optimist Sun'].map((col, index) => {
                const bg = [
                  'bg-orange-500',
                  'bg-emerald-500',
                  'bg-blue-600',
                  'bg-purple-600',
                  'bg-yellow-500',
                ][index];
                return (
                  <span
                    key={col}
                    title={col}
                    className={`w-3.5 h-3.5 rounded-full ${bg} hover:scale-125 transition-transform cursor-help`}
                  />
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Section with terms and credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs font-semibold text-gray-500 gap-4">
          <p id="copyright-text" className="text-center sm:text-left">
            © 2026 InAmigos Foundation. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={12} className="text-red-500 fill-red-500" />
            <span>&</span>
            <Globe size={11} className="text-blue-500" />
            <span className="ml-1 text-gray-400">in Bilaspur, Chhattisgarh</span>
          </div>

          <button
            id="back-to-top"
            onClick={scrollBackToTop}
            className="flex items-center gap-1 border border-gray-800 rounded-lg py-1 px-2.5 bg-gray-900 hover:bg-gray-800 hover:text-white transition-all text-[11px]"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
