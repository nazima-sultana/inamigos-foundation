import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { Calendar, User, Clock, ArrowRight, X } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Visual background enhancements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-500 font-sans">
            Stories & Updates
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 tracking-tight mt-2">
            Our Foundation Blog
          </h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mt-4 mx-auto" />
          <p className="text-base sm:text-lg text-gray-600 font-sans mt-5">
            Empathetic updates straight from the ground. Read about our community programs, success chronicles, and environmental insights.
          </p>
        </div>

        {/* 3 Columns blog cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 85, damping: 15, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300 group"
            >
              {/* Blog Lead Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-orange-550 bg-orange-500 text-white font-sans font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Date and Author Line */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-semibold text-gray-400 font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-orange-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-orange-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-gray-900 leading-snug group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-sans leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600 uppercase font-sans">
                      {post.author[0]}
                    </span>
                    <span className="text-xs font-bold text-gray-650 text-gray-600 font-sans">{post.author}</span>
                  </div>

                  <button
                    id={`blog-read-${post.id}`}
                    onClick={() => setSelectedPost(post)}
                    className="text-xs font-bold font-sans text-orange-500 group-hover:text-orange-600 hover:underline flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Blog Post Reading Modal Overlay */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing wash */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Full Reading Paper Material */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl z-10 border border-gray-100"
              >
                {/* Close anchor */}
                <button
                  id="close-blog-reader"
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 z-20 p-2 text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-colors border border-white/10"
                >
                  <X size={18} />
                </button>

                {/* Cover Banner */}
                <div className="h-56 relative flex-shrink-0">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-955 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <span className="bg-orange-500 text-white font-sans font-bold text-xs px-2.5 py-1 rounded-full">
                      {selectedPost.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mt-2 leading-tight">
                      {selectedPost.title}
                    </h3>
                  </div>
                </div>

                {/* Dynamic Reading Area with native scroll */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-5 flex-1">
                  {/* Article Metadata line */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 font-sans border-b border-gray-100 pb-4">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <User size={14} className="text-orange-500" />
                      Written by: <strong className="text-gray-800">{selectedPost.author}</strong>
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Calendar size={14} className="text-orange-500" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Clock size={14} className="text-orange-500" />
                      {selectedPost.readTime}
                    </span>
                  </div>

                  {/* Body Text */}
                  <p className="text-sm sm:text-base text-gray-750 text-gray-650 font-sans leading-relaxed text-justify whitespace-pre-wrap">
                    {selectedPost.content}
                  </p>

                  <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mt-6">
                    <p className="text-xs font-bold text-orange-600 font-sans uppercase tracking-widest">Share the word</p>
                    <p className="text-sm text-gray-700 font-sans leading-snug mt-1">
                      By supporting InAmigos Foundation, you allow our volunteers on the ground to scale digital academies, plant forests, and provide medical care to village segments. Keep dreaming for change!
                    </p>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex justify-end flex-shrink-0">
                  <button
                    id="blog-reader-dismiss"
                    onClick={() => setSelectedPost(null)}
                    className="px-6 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm font-sans shadow-md shadow-orange-500/10 transition-colors"
                  >
                    Done Reading
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
