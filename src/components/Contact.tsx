import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);
  const [subError, setSubError] = useState('');

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubError('');

    if (!subscribeEmail) {
      setSubError('Please enter an email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(subscribeEmail)) {
      setSubError('Please enter a valid email address.');
      return;
    }

    setSubSuccess(true);
    setSubscribeEmail('');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) return;

    setFormSuccess(true);
    setFormName('');
    setFormEmail('');
    setFormMsg('');

    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background vector spots */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-500 font-sans">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-gray-900 tracking-tight mt-2">
            Contact & Support
          </h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mt-4 mx-auto" />
          <p className="text-base sm:text-lg text-gray-600 font-sans mt-5">
            Whether you want to volunteer, partner, ask questions, or discuss local drives, our teams would love to hear from you.
          </p>
        </div>

        {/* Two Columns Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Column 1: Info Cards and Newsletter Subscribe */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">
              Foundation Offices
            </h3>
            
            {/* Contact details stack */}
            <div className="space-y-5">
              {/* Address card */}
              <div id="contact-address-card" className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                <span className="p-3 bg-white rounded-xl text-orange-500 shadow-sm flex-shrink-0">
                  <MapPin size={22} />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 font-sans uppercase tracking-wider">Registered Address</h4>
                  <p className="text-base font-semibold text-gray-800 font-sans mt-1 leading-relaxed">
                    Ward No. 5, Gram Post, Sipat Ujwal Nagar,<br />
                    Bilaspur, Chhattisgarh, Pin: 495555
                  </p>
                </div>
              </div>

              {/* Email card */}
              <div id="contact-email-card" className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                <span className="p-3 bg-white rounded-xl text-blue-500 shadow-sm flex-shrink-0">
                  <Mail size={22} />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 font-sans uppercase tracking-wider">Email Us</h4>
                  <a
                    href="mailto:inamigosfoundation@gmail.com"
                    className="text-base font-semibold text-gray-800 hover:text-orange-550 hover:text-orange-500 font-sans mt-1 inline-block break-all transition-colors"
                  >
                    inamigosfoundation@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone card */}
              <div id="contact-phone-card" className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                <span className="p-3 bg-white rounded-xl text-emerald-500 shadow-sm flex-shrink-0">
                  <Phone size={22} />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 font-sans uppercase tracking-wider">Call Us</h4>
                  <a
                    href="tel:+916267309902"
                    className="text-base font-semibold text-gray-800 hover:text-orange-550 hover:text-orange-500 font-sans mt-1 inline-block transition-colors"
                  >
                    +91 626 730 9902
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter subscription form widget */}
            <div className="p-6 rounded-3xl bg-orange-50 border border-orange-100 shadow-sm relative overflow-hidden" id="newsletter-form-container">
              {/* Decorative accent */}
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-orange-550/5 rounded-full pointer-events-none" />
              
              <h4 className="text-lg font-bold font-display text-gray-950">
                Subscribe to our newsletter
              </h4>
              <p className="text-sm text-gray-600 font-sans leading-relaxed mt-1">
                Receive weekly blueprints, event circulars, and beautiful updates straight from Bilaspur.
              </p>

              <AnimatePresence mode="wait">
                {!subSuccess ? (
                  <motion.form
                    id="newsletter-sub-form"
                    onSubmit={handleSubscribe}
                    className="mt-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        id="newsletter-email-input"
                        type="email"
                        placeholder="Your email address"
                        value={subscribeEmail}
                        onChange={(e) => {
                          setSubscribeEmail(e.target.value);
                          setSubError('');
                        }}
                        className="flex-1 bg-white border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 px-4 py-3 rounded-xl text-sm text-gray-800 font-sans shadow-inner placeholder:text-gray-400"
                        title="Enter Email"
                      />
                      <button
                        id="newsletter-subscribe-submit"
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 font-sans font-bold text-sm text-white px-5 py-3 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                      >
                        <Send size={15} />
                        <span>Join Newsletter</span>
                      </button>
                    </div>
                    {subError && (
                      <motion.div
                        id="newsletter-error"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1.5 text-xs font-semibold text-red-600 mt-2 ml-1"
                      >
                        <AlertCircle size={14} />
                        <span>{subError}</span>
                      </motion.div>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    id="newsletter-success-block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 bg-white rounded-2xl p-4 border border-orange-200 flex gap-3 items-start shadow-md shadow-orange-500/5"
                  >
                    <CheckCircle2 size={22} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-900 font-display">Subscription Successful!</p>
                      <p className="text-xs text-gray-600 font-sans leading-snug mt-0.5">
                        We have added you to our newsletter circles! Preparing beautiful stories.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Column 2: Elegant Feedback Contact Message Form */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-bold font-display text-gray-900 mb-1">
              Send Us a Message
            </h3>
            <p className="text-sm text-gray-500 font-sans mb-6">
              Fill in your contact inquiries, suggestions, or potential partnership alignments below.
            </p>

            <form id="contact-msg-form" onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-xs font-bold text-gray-400 font-sans uppercase tracking-wider ml-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="E.g. Deepak Kumar"
                    className="w-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 px-4 py-3 rounded-xl text-sm text-gray-800 font-sans shadow-sm placeholder:text-gray-300"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-xs font-bold text-gray-400 font-sans uppercase tracking-wider ml-1">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="deepak@example.com"
                    className="w-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 px-4 py-3 rounded-xl text-sm text-gray-800 font-sans shadow-sm placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-msg" className="text-xs font-bold text-gray-400 font-sans uppercase tracking-wider ml-1">
                  Your Message
                  </label>
                <textarea
                  id="contact-msg"
                  rows={4}
                  required
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                  placeholder="How can we unite minds for change together?"
                  className="w-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 p-4 rounded-xl text-sm text-gray-800 font-sans shadow-sm resize-none placeholder:text-gray-300"
                />
              </div>

              <button
                id="contact-form-submit"
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 font-sans font-bold text-sm text-white py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-1.5"
              >
                <Send size={16} />
                <span>Submit Form Inquiries</span>
              </button>

              <AnimatePresence>
                {formSuccess && (
                  <motion.div
                    id="contact-success-response"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-250 border-emerald-100 rounded-2xl flex gap-3 text-emerald-900 mt-4"
                  >
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold font-display leading-tight">Thank you, Message Received!</p>
                      <p className="text-xs text-emerald-700 font-sans mt-0.5">
                        Our Bilaspur core circle coordinators have logged this inquiry successfully. We will follow up via email within 48 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
