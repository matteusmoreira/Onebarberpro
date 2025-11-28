import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const About = lazy(() => import('./components/About'));
const Benefits = lazy(() => import('./components/Benefits'));
const Demo = lazy(() => import('./components/Demo'));
const Diferenciais = lazy(() => import('./components/Diferenciais'));
const Integrations = lazy(() => import('./components/Integrations'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Suspense fallback={<div className="min-h-[50vh]" />}> 
          <About />
          <Benefits />
          <Demo />
          <Diferenciais />
          <Integrations />
          <Testimonials />
          <CallToAction />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-24" />}> 
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
