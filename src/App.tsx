/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import JoinModal from './components/JoinModal';

export default function App() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans selection:bg-orange-500 selection:text-white antialiased text-gray-800">
      
      {/* Dynamic Global Navbar */}
      <Navbar
        onDonateClick={() => setIsDonationOpen(true)}
        onJoinClick={() => setIsJoinOpen(true)}
      />

      {/* Main Single Page content sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero
          onDonateClick={() => setIsDonationOpen(true)}
          onJoinClick={() => setIsJoinOpen(true)}
        />

        {/* Section 2: About Us */}
        <About />

        {/* Section 3: Programs / Categories */}
        <Programs
          onDonateClick={() => setIsDonationOpen(true)}
          onJoinClick={() => setIsJoinOpen(true)}
        />

        {/* Section 4: Gallery */}
        <Gallery />

        {/* Section 5: Blog */}
        <Blog />

        {/* Section 6: Contact Us */}
        <Contact />
      </main>

      {/* Global Page Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
      />

      <JoinModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
      />

    </div>
  );
}

