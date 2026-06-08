import { motion } from 'motion/react';
import { Heart, Users, ArrowRight } from 'lucide-react';

interface HeroProps {
  onDonateClick: () => void;
  onJoinClick: () => void;
}

export default function Hero({ onDonateClick, onJoinClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Warm Soft Overlay Grid */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop"
          alt="InAmigos School Children"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 via-orange-950/45 to-purple-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent opacity-95" />
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      </div>

      {/* Floating Vibrant Color Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-[120px] opacity-25 pointer-events-none animate-pulse duration-5000" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-20 pointer-events-none animate-pulse duration-7000" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <motion.span
            id="hero-badge"
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold font-sans tracking-widest bg-orange-500/15 border border-orange-500/30 text-orange-400 mb-6 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
            Empowering Grassroot Communities in India
          </motion.span>

          {/* Title */}
          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.1] mb-6"
          >
            InAmigos Foundation
          </motion.h1>

          {/* Animated Tagline */}
          <motion.p
            id="hero-tagline"
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-amber-200 tracking-wide italic mb-8"
          >
            "Uniting Minds for Change"
          </motion.p>

          {/* Description */}
          <motion.p
            id="hero-subtext"
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl font-sans text-gray-200 max-w-2xl leading-relaxed mb-10"
          >
            We are a youth-led development organization committed to advancing digital literacy, environmental sustainability, and vital primary community healthcare solutions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            id="hero-actions"
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
          >
            <button
              id="hero-donate-btn"
              onClick={onDonateClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-sans font-bold text-base py-4 px-8 rounded-full shadow-lg shadow-orange-500/35 transition-all text-center group"
            >
              <Heart size={20} className="group-hover:scale-110 transition-transform" />
              <span>Donate Now</span>
            </button>
            <button
              id="hero-join-btn"
              onClick={onJoinClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 active:scale-95 text-white font-sans font-semibold text-base py-4 px-8 rounded-full backdrop-blur-sm transition-all focus:outline-none"
            >
              <Users size={20} />
              <span>Join As Volunteer</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            id="hero-stats"
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 sm:gap-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 mt-16 w-full max-w-3xl shadow-xl shadow-black/10 border border-gray-100"
          >
            <div className="text-center">
              <p className="text-2xl sm:text-4xl font-extrabold font-display text-orange-500">12k+</p>
              <p className="text-xs sm:text-sm font-semibold font-sans text-gray-500 uppercase tracking-wider mt-1">Lives Changed</p>
            </div>
            <div className="text-center border-x border-gray-200">
              <p className="text-2xl sm:text-4xl font-extrabold font-display text-blue-600">15+</p>
              <p className="text-xs sm:text-sm font-semibold font-sans text-gray-500 uppercase tracking-wider mt-1">Villages Reached</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-4xl font-extrabold font-display text-emerald-600">500+</p>
              <p className="text-xs sm:text-sm font-semibold font-sans text-gray-500 uppercase tracking-wider mt-1">Active Volunteers</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Hint Indication */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-70">
        <span className="text-xs uppercase font-bold tracking-widest text-gray-400 font-sans">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-6 rounded-full bg-orange-400"
        />
      </div>
    </section>
  );
}
