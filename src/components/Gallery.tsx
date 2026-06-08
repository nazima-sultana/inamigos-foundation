import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data';
import { GalleryImage } from '../types';
import { Image, Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Education' | 'Environment' | 'Community' | 'Youth'>('All');
  const [lightBoxImage, setLightBoxImage] = useState<GalleryImage | null>(null);

  const categories: Array<'All' | 'Education' | 'Environment' | 'Community' | 'Youth'> = [
    'All',
    'Education',
    'Environment',
    'Community',
    'Youth',
  ];

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (activeFilter === 'All') return true;
    return img.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-500/5 rounded-full filter blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-500 font-sans">
            Capturing Memories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 tracking-tight mt-2">
            Our Action Gallery
          </h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mt-4 mx-auto" />
          <p className="text-base sm:text-lg text-gray-600 font-sans mt-5">
            A window into the life-transforming drives, community gatherings, and hands-on environmental actions orchestrated by our dedicated circles.
          </p>
        </div>

        {/* Categories / Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-gallery-${cat.toLowerCase()}`}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-bold font-sans transition-all duration-300 pointer-events-auto ${
                activeFilter === cat
                  ? 'text-white'
                  : 'text-gray-600 bg-gray-50 border border-gray-100 hover:bg-gray-100'
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {activeFilter === cat && (
                <motion.span
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-orange-500 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Photo Grid with framer-motion layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer border border-gray-100 bg-gray-50"
                onClick={() => setLightBoxImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" >
                  <span className="text-orange-400 text-xs font-bold font-sans uppercase tracking-widest mb-1.5 inline-block">
                    {img.category}
                  </span>
                  <p className="text-white text-base font-bold font-display leading-tight mb-3">
                    {img.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-gray-300 text-xs font-bold uppercase tracking-wider">
                    <Maximize2 size={12} />
                    <span>Expand Photo</span>
                  </div>
                </div>

                {/* Micro Category Tag Indicator on static view */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-gray-100 text-gray-700 font-sans font-bold text-xs px-3 py-1 rounded-full shadow-sm group-hover:opacity-0 transition-opacity duration-200">
                  {img.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State if any category doesn't have images */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-gray-50/50 rounded-3xl border border-gray-100">
            <Image className="mx-auto w-12 h-12 text-gray-300 mb-3" />
            <p className="text-gray-500 font-sans text-sm font-medium">No images uploaded for this group yet.</p>
          </div>
        )}

        {/* LightBox Overlay */}
        <AnimatePresence>
          {lightBoxImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightBoxImage(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Lightbox content container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center z-10"
              >
                {/* Close Button element */}
                <button
                  id="close-lightbox"
                  onClick={() => setLightBoxImage(null)}
                  className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
                  title="Close Image"
                >
                  <X size={20} />
                </button>

                {/* Big Image display */}
                <div className="bg-white/5 rounded-3xl overflow-hidden p-2 border border-white/10 max-h-[70vh] flex items-center justify-center">
                  <img
                    src={lightBoxImage.url}
                    alt={lightBoxImage.caption}
                    className="max-w-full max-h-[64vh] object-contain rounded-2xl select-none"
                  />
                </div>

                {/* Caption Panel */}
                <div className="text-center mt-4 text-white max-w-2xl px-4">
                  <span className="text-xs font-bold font-sans uppercase tracking-widest text-orange-400">
                    {lightBoxImage.category} Drive
                  </span>
                  <p className="text-lg font-bold font-display mt-1">{lightBoxImage.caption}</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
