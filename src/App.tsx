/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

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
    <div className="bg-black text-neutral-300 min-h-screen relative">
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay"></div>
      <Navbar />
      <main>
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
