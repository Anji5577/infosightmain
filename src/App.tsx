/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Workflow } from './components/Workflow';
import { Projects } from './components/Projects';
import { WhyUs } from './components/WhyUs';
import { Industries } from './components/Industries';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-neutral-300 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Workflow />
        <Projects />
        <WhyUs />
        <Industries />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
