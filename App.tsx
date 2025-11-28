import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Demo from './components/Demo';
import Diferenciais from './components/Diferenciais';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Benefits />
        <Demo />
        <Diferenciais />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;