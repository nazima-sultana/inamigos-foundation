import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, HeartPulse } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vector assets */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Gorgeous Image and Impact Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541976590-713941af8119?q=80&w=800&auto=format&fit=crop"
                alt="Volunteers teaching children"
                className="w-full h-auto aspect-[4/5] object-cover filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              
              {/* Overlaid Floating Achievement Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/20">
                <p className="text-sm font-bold text-gray-400 font-sans tracking-wide uppercase">Core Philosophy</p>
                <p className="text-lg font-bold text-gray-900 font-display mt-1">
                  "Uniting Minds for Change"
                </p>
                <div className="flex gap-2 mt-3 pl-0.5">
                  <span className="w-6 h-1.5 rounded-full bg-orange-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                </div>
              </div>
            </div>

            {/* Decorative dot grid */}
            <div className="absolute -top-6 -left-6 w-32 h-32 grid-bg opacity-40 -z-10" />
          </motion.div>

          {/* Right Column: Information, Mission, Vision */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-orange-500 font-sans">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 tracking-tight mt-2">
                InAmigos Foundation
              </h2>
              <div className="w-16 h-1 bg-orange-500 rounded-full mt-4" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed"
            >
              InAmigos Foundation is a youth-led civic non-profit organization focused on building empowered, resilient communities. We believe in harnessing the combined potential of young minds to drive collective progress. Through specialized action-oriented models, we work directly in rural sectors to secure a greener world, access to dynamic digital study structures, and support healthcare resources for vulnerable populations.
            </motion.p>

            {/* Mission & Vision Bento Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Mission Card */}
              <motion.div
                variants={itemVariants}
                className="bg-orange-50/50 hover:bg-orange-50 border border-orange-100 rounded-2xl p-6 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-orange-500">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-gray-900">Our Mission</h3>
                </div>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  To empower marginalized communities by fostering access to digital literacy, clean environmental stewardship, and primary wellness supports, fueled by local youth leadership.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                variants={itemVariants}
                className="bg-blue-50/50 hover:bg-blue-50 border border-blue-100 rounded-2xl p-6 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-gray-900">Our Vision</h3>
                </div>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  To realize a highly inclusive, climate-resilient society where every individual has the agency, fundamental tools, and supportive ecosystem to thrive and lead.
                </p>
              </motion.div>
            </motion.div>

            {/* Core Values tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <h4 className="text-xs font-bold text-gray-400 font-sans uppercase tracking-widest mb-3">Our Driving Core Values</h4>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: 'Empowerment', color: 'bg-orange-50 text-orange-700 border-orange-100' },
                  { name: 'Sustainability', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
                  { name: 'Integrity', color: 'bg-blue-50 text-blue-700 border-blue-100' },
                  { name: 'Mutual Respect', color: 'bg-purple-50 text-purple-700 border-purple-100' },
                  { name: 'Grassroots First', color: 'bg-amber-50 text-amber-700 border-amber-100' }
                ].map((val) => (
                  <span
                    key={val.name}
                    className={`inline-flex items-center px-4 py-1.5 border rounded-full text-xs font-semibold font-sans ${val.color}`}
                  >
                    {val.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
