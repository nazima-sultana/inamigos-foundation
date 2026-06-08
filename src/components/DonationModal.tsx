import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('tier-2');
  const [customAmount, setCustomAmount] = useState('');
  
  const donationTiers = [
    { id: 'tier-1', title: 'Plant 10 Saplings', amount: 1000, desc: 'Covers protective cages, natural compost, and sapling water monitoring.' },
    { id: 'tier-2', title: 'Sponsor Education Kit', amount: 1500, desc: 'Provides books, school bags, writing instruments, and soft skill books.' },
    { id: 'tier-3', title: 'Fund Primary Health Camp', amount: 2500, desc: 'Diagnostics, primary diagnostic reagents, and vital medicine packs.' },
    { id: 'tier-custom', title: 'Custom Support Contribution', amount: 0, desc: 'Direct your heart-felt support towards core grassroot actions.' }
  ];

  const activeTier = donationTiers.find(t => t.id === selectedTier);
  const finalAmount = selectedTier === 'tier-custom' ? Number(customAmount) : (activeTier?.amount || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail) return;
    if (selectedTier === 'tier-custom' && (!customAmount || Number(customAmount) <= 0)) return;
    
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setDonorName('');
    setDonorEmail('');
    setSelectedTier('tier-2');
    setCustomAmount('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl z-10 border border-gray-100"
          >
            {/* Close trigger */}
            <button
              id="close-donation-modal"
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              title="Close Modal"
            >
              <X size={18} />
            </button>

            {/* Header branding */}
            <div className="bg-orange-500 p-6 text-white text-center sm:p-8 flex flex-col items-center">
              <span className="p-2.5 bg-white/10 rounded-full mb-3 border border-white/20">
                <HeartHandshake size={28} />
              </span>
              <h3 className="text-2xl font-bold font-display">Support Our Grassroots Goals</h3>
              <p className="text-xs text-orange-100 font-sans mt-1">
                Your direct contribution enables real local change in Bilaspur, India.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.form
                  key="don-step-1"
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-8 space-y-5"
                  initial={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  {/* Contact Info details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="don-name" className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Your Name</label>
                      <input
                        id="don-name"
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="E.g. Shruthi Deshpande"
                        className="w-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 px-3.5 py-2.5 rounded-xl text-sm font-sans"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="don-email" className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Your Email</label>
                      <input
                        id="don-email"
                        type="email"
                        required
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="shruthi@example.com"
                        className="w-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 px-3.5 py-2.5 rounded-xl text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Program Tiers selectors */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Select Impact Area</label>
                    <div className="grid grid-cols-1 gap-2.5">
                      {donationTiers.map((t) => (
                        <label
                          key={t.id}
                          className={`relative border rounded-2xl p-3 flex items-start gap-3 cursor-pointer transition-all duration-200 ${
                            selectedTier === t.id
                              ? 'bg-orange-50/50 border-orange-500 shadow-sm'
                              : 'bg-white border-gray-100 hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="donation-tier"
                            value={t.id}
                            checked={selectedTier === t.id}
                            onChange={() => setSelectedTier(t.id)}
                            className="mt-1 accent-orange-500"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-gray-900 font-display">{t.title}</span>
                              <span className="text-sm font-black text-orange-550 text-orange-600 font-sans">
                                {t.amount > 0 ? `₹${t.amount}` : 'Custom'}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 font-sans mt-0.5 leading-snug">{t.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount input */}
                  {selectedTier === 'tier-custom' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1"
                    >
                      <label htmlFor="don-custom" className="text-xs font-bold text-gray-450 text-gray-400 uppercase tracking-widest font-sans">Specify Custom Amount (INR)</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-sm font-extrabold text-gray-400">₹</span>
                        <input
                          id="don-custom"
                          type="number"
                          min="100"
                          required
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="Minimum ₹100"
                          className="w-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 pl-8 pr-3.5 py-2.5 rounded-xl text-sm font-semibold font-sans"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Disclaimer & Submission */}
                  <div className="pt-2">
                    <button
                      id="don-form-submit"
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all py-3 px-5 rounded-xl font-sans font-bold text-sm text-white shadow-lg shadow-orange-500/20 flex items-center justify-center gap-1.5"
                    >
                      <Heart size={16} fill="white" />
                      <span>Proceed To Contribution (₹{finalAmount || 1500})</span>
                    </button>
                    <p className="text-[10px] text-gray-400 font-sans text-center mt-2.5 leading-relaxed">
                      All local transactions are secured. Tax receipts under 80G provisions will be dispatched as reports to your registered email address securely.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="don-step-2"
                  className="p-6 sm:p-8 text-center flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <CheckCircle2 size={56} className="text-emerald-500" />
                  
                  <div className="space-y-1.5">
                    <h4 className="text-2xl font-bold font-display text-gray-900">Thank you, {donorName}!</h4>
                    <p className="text-sm text-gray-600 font-sans max-w-sm mx-auto leading-relaxed">
                      Your contribution request towards <strong>"{activeTier?.title}"</strong> of value <strong>₹{finalAmount}</strong> has been simulation-filed in our local database record successfully!
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 w-full text-left space-y-1.5 text-xs font-sans text-gray-600">
                    <div className="flex justify-between border-b border-gray-150 pb-1.5 font-bold">
                      <span>Receipt ID</span>
                      <span className="font-mono text-gray-900 uppercase">IAM-{(Math.random() * 100000).toFixed(0)}</span>
                    </div>
                    <p><strong>Impact Area:</strong> {activeTier?.title}</p>
                    <p><strong>Amount Allocated:</strong> ₹{finalAmount}</p>
                    <p><strong>Reports Dispatched to:</strong> {donorEmail}</p>
                  </div>

                  <p className="text-xs text-gray-400 font-sans">
                    A grassroots coordinator will contact you via email soon. We appreciate your empathetic companionship!
                  </p>

                  <button
                    id="don-close-success"
                    onClick={handleReset}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-sans font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-colors"
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
