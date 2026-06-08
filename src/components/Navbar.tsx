import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onDonateClick: () => void;
  onJoinClick: () => void;
}

export default function Navbar({ onDonateClick, onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
      setActiveTab(targetId);
    }
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Multi-color accents from description */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 text-2xl font-black tracking-tight font-display"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500 font-bold text-white shadow-emerald-100 shadow-md">
              In
            </span>
            <span className="flex flex-col select-none leading-none">
              <span className="text-gray-900 font-extrabold text-lg sm:text-xl">
                Amigos
              </span>
              <span className="text-blue-600 font-medium text-xs tracking-wider">
                FOUNDATION
              </span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative font-sans text-sm font-semibold transition-colors py-2 px-1 ${
                    activeTab === link.id
                      ? 'text-orange-500'
                      : isScrolled
                      ? 'text-gray-600 hover:text-orange-500'
                      : 'text-gray-800 hover:text-orange-500 md:text-gray-900 md:hover:text-orange-500'
                  }`}
                >
                  {link.name}
                  {activeTab === link.id && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                id="donate-btn-nav"
                onClick={onDonateClick}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-sans text-sm font-bold py-2.5 px-5 rounded-full transition-all duration-250 shadow-md shadow-orange-500/20"
              >
                <Heart size={16} fill="white" />
                <span>Donate Now</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-900 hover:bg-black/5'
              } transition-colors`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold font-sans transition-colors ${
                    activeTab === link.id
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3 px-4">
                <button
                  id="donate-btn-mobile"
                  onClick={() => {
                    setIsOpen(false);
                    onDonateClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-sans font-bold py-3 px-4 rounded-xl shadow-lg shadow-orange-500/10"
                >
                  <Heart size={18} fill="currentColor" />
                  <span>Donate Now</span>
                </button>
                <button
                  id="join-btn-mobile"
                  onClick={() => {
                    setIsOpen(false);
                    onJoinClick();
                  }}
                  className="w-full border border-gray-200 text-gray-700 font-sans font-semibold py-3 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  Join Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
