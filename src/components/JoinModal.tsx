import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, UserPlus } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [volName, setVolName] = useState('');
  const [volEmail, setVolEmail] = useState('');
  const [volPhone, setVolPhone] = useState('');
  const [volArea, setVolArea] = useState('education');
  const [volNote, setVolNote] = useState('');

  const volunteerAreas = [
    { id: 'education', name: 'Digital Academy Study Tutor' },
    { id: 'environment', name: 'Green Horizon Tree Warden' },
    { id: 'community', name: 'Health & Ration Distribution Lead' },
    { id: 'youth', name: 'Vocational Skills & Coding Advisor' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volName || !volEmail || !volPhone) return;
    
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setVolName('');
    setVolEmail('');
    setVolPhone('');
    setVolArea('education');
    setVolNote('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl z-10 border border-gray-100"
          >
            {/* Close trigger button */}
            <button
              id="close-join-modal"
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              title="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header section branding */}
            <div className="bg-blue-600 p-6 text-white text-center sm:p-8 flex flex-col items-center">
              <span className="p-2.5 bg-white/10 rounded-full mb-3 border border-white/20">
                <UserPlus size={28} />
              </span>
              <h3 className="text-2xl font-bold font-display">Join As Grassroots Volunteer</h3>
              <p className="text-xs text-blue-100 font-sans mt-0.5">
                Invest your skills, hours, and spirit to shape local society segments.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.form
                  key="join-step-1"
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-8 space-y-4"
                  initial={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="vol-name" className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Full Name</label>
                    <input
                      id="vol-name"
                      type="text"
                      required
                      value={volName}
                      onChange={(e) => setVolName(e.target.value)}
                      placeholder="E.g. Rajesh Dewangan"
                      className="w-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3.5 py-2.5 rounded-xl text-sm font-sans"
                    />
                  </div>

                  {/* Email & Phone fields tuple */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="vol-email" className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Email Address</label>
                      <input
                        id="vol-email"
                        type="email"
                        required
                        value={volEmail}
                        onChange={(e) => setVolEmail(e.target.value)}
                        placeholder="rajesh@example.com"
                        className="w-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3.5 py-2.5 rounded-xl text-sm font-sans"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="vol-phone" className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Phone Number</label>
                      <input
                        id="vol-phone"
                        type="tel"
                        required
                        value={volPhone}
                        onChange={(e) => setVolPhone(e.target.value)}
                        placeholder="E.g. +91 98765 43210"
                        className="w-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3.5 py-2.5 rounded-xl text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Selection options for Area */}
                  <div className="space-y-1">
                    <label htmlFor="vol-area" className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Selected Pursuit Interest</label>
                    <select
                      id="vol-area"
                      value={volArea}
                      onChange={(e) => setVolArea(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3.5 py-2.5 rounded-xl text-sm font-semibold font-sans text-gray-700"
                    >
                      {volunteerAreas.map((a) => (
                        <option key={a.id} value={a.id}>
                          {a.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Vol Note text field */}
                  <div className="space-y-1">
                    <label htmlFor="vol-note" className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Message & Availability (Optional)</label>
                    <textarea
                      id="vol-note"
                      rows={3}
                      value={volNote}
                      onChange={(e) => setVolNote(e.target.value)}
                      placeholder="Briefly share any background insights or when you can volunteer..."
                      className="w-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3.5 rounded-xl text-sm font-sans resize-none"
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-3">
                    <button
                      id="vol-form-submit"
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all py-3 px-5 rounded-xl font-sans font-bold text-sm text-white shadow-lg shadow-blue-500/20 flex items-center justify-center gap-1.5"
                    >
                      <Sparkles size={16} />
                      <span>Register As Volunteer</span>
                    </button>
                    <p className="text-[10px] text-gray-400 font-sans text-center mt-2 leading-relaxed">
                      By submitting this registration, you authorize InAmigos Foundation coordinators to contact you on the supplied phone/email address for subsequent orientation.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="join-step-2"
                  className="p-6 sm:p-8 text-center flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <CheckCircle2 size={56} className="text-emerald-500" />
                  
                  <div className="space-y-1.5">
                    <h4 className="text-2xl font-bold font-display text-gray-900">Celebration, {volName}!</h4>
                    <p className="text-sm text-gray-600 font-sans max-w-sm mx-auto leading-relaxed">
                      Your interest in joining us as a <strong>"{volunteerAreas.find(a => a.id === volArea)?.name}"</strong> has been securely filed in our local registration databases!
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 w-full text-left space-y-1.5 text-xs font-sans text-gray-600">
                    <div className="flex justify-between border-b border-gray-150 pb-1.5 font-bold">
                      <span>Registration ID</span>
                      <span className="font-mono text-gray-900 uppercase">IAM-VOL-{(Math.random() * 1000).toFixed(0)}</span>
                    </div>
                    <p><strong>Primary Interest:</strong> {volunteerAreas.find(a => a.id === volArea)?.name}</p>
                    <p><strong>Contact logged:</strong> {volPhone}</p>
                    <p><strong>Verification details sent:</strong> {volEmail}</p>
                  </div>

                  <p className="text-xs text-gray-400 font-sans">
                    A grassroots core circle coordinator will schedule an introductory call soon. Thank you for uniting your mind for change click!
                  </p>

                  <button
                    id="join-close-success"
                    onClick={handleReset}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-colors"
                  >
                    Return to Foundation
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
