import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { PROGRAMS } from '../data';
import { Program } from '../types';

interface ProgramsProps {
  onDonateClick: () => void;
  onJoinClick: () => void;
}

// Helper to render dynamic lucide icons safely
const IconRenderer = ({ name, className }: { name: string; className: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

export default function Programs({ onDonateClick, onJoinClick }: ProgramsProps) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section id="programs" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Structural visual lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-500 font-sans">
            Our Key Areas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 tracking-tight mt-2">
            Empowerment Programs
          </h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mt-4 mx-auto" />
          <p className="text-base sm:text-lg text-gray-600 font-sans mt-5">
            Through sustained focal points, InAmigos Foundation operates systemic programs targeting education accessibility, youth technical skills, health support, and green infrastructure.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((prog, index) => {
            const isSelected = selectedProgram?.id === prog.id;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 80, damping: 15, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 relative group"
              >
                {/* Visual Top Highlight Ribbon */}
                <span className={`h-1.5 w-full ${prog.bgClass}`} />

                {/* Card Cover Photo */}
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white text-xs font-bold font-sans uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    Active Initiative
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className={`p-2.5 rounded-xl bg-gray-50 border border-gray-100 ${prog.colorClass.split(' ')[0]}`}>
                        <IconRenderer name={prog.iconName} className="w-5 h-5" />
                      </span>
                      <h3 className="text-xl font-bold font-display text-gray-900 leading-snug">
                        {prog.title}
                      </h3>
                    </div>
                    
                    <p className="text-xs font-semibold text-gray-400 font-sans tracking-wide uppercase">
                      {prog.tagline}
                    </p>
                    
                    <p className="text-sm text-gray-600 font-sans leading-relaxed line-clamp-3">
                      {prog.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-50 mt-6 flex items-center justify-between">
                    <button
                      id={`prog-more-${prog.id}`}
                      onClick={() => setSelectedProgram(prog)}
                      className="text-sm font-bold font-sans text-orange-500 hover:text-orange-600 hover:underline inline-flex items-center gap-1 group/btn"
                    >
                      <span>Explore Objectives</span>
                      <Icons.ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Program Dialog Drawer (AnimatePresence Overlay) */}
        <AnimatePresence>
          {selectedProgram && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProgram(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Core Content Modal Dialog */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 border border-gray-100"
              >
                {/* Close Button */}
                <button
                  id="close-program-modal"
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 z-20 p-2 text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-colors border border-white/10"
                >
                  <Icons.X size={18} />
                </button>

                {/* Banner Photo Overlay */}
                <div className="h-56 relative">
                  <img
                    src={selectedProgram.image}
                    alt={selectedProgram.title}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <span className="p-2 bg-white rounded-lg text-orange-600">
                        <IconRenderer name={selectedProgram.iconName} className="w-5 h-5" />
                      </span>
                      <span className="text-sm font-bold text-orange-400 font-sans uppercase tracking-wider">
                        {selectedProgram.tagline}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-2">
                      {selectedProgram.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-sans">Core Description</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
                      {selectedProgram.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-sans">Active Objectives & Progress</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {selectedProgram.details.map((act, i) => (
                        <div key={i} className="flex gap-2.5 items-start">
                          <span className="p-1 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 border border-emerald-100 flex-shrink-0">
                            <Icons.CheckCircle2 size={14} />
                          </span>
                          <span className="text-sm text-gray-700 font-sans leading-snug">
                            {act}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-150 flex flex-col sm:flex-row gap-3 justify-end items-center">
                    <button
                      id="prog-modal-join"
                      onClick={() => {
                        setSelectedProgram(null);
                        onJoinClick();
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-sm font-sans transition-colors text-center"
                    >
                      Volunteer For This
                    </button>
                    <button
                      id="prog-modal-donate"
                      onClick={() => {
                        setSelectedProgram(null);
                        onDonateClick();
                      }}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm font-sans shadow-md shadow-orange-505/20 transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <Icons.Heart size={16} fill="white" />
                      <span>Support Program</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
