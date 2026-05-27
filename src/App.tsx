/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { NeuralVortexBackground } from './components/ui/interactive-neural-vortex-background';

// Lazy loading below-the-fold components
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const Stats = lazy(() => import('./components/Stats').then(module => ({ default: module.Stats })));
const Workflow = lazy(() => import('./components/Workflow').then(module => ({ default: module.Workflow })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const WhyUs = lazy(() => import('./components/WhyUs').then(module => ({ default: module.WhyUs })));
const Industries = lazy(() => import('./components/Industries').then(module => ({ default: module.Industries })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const CTA = lazy(() => import('./components/CTA').then(module => ({ default: module.CTA })));

export default function App() {
  return (
    <div className="bg-black text-neutral-300 min-h-screen relative overflow-x-hidden">
      {/* Global Interactive Neural Vortex Background */}
      <NeuralVortexBackground />

      {/* Animated Film Grain Overlay */}
      <div className="fixed inset-[-10%] z-50 pointer-events-none opacity-[0.035] bg-noise mix-blend-overlay animate-noise"></div>
      
      {/* Cinematic Viewport Vignette */}
      <div className="fixed inset-0 z-40 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)]"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-neutral-500">Loading...</div>}>
          <Services />
          <Stats />
          <Workflow />
          <Projects />
          <WhyUs />
          <Industries />
          <Testimonials />
          <FAQ />
          <Contact />
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
