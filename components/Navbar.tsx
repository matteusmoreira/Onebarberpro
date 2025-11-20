import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-all">
            <Scissors className="w-5 h-5 text-neutral-950 transform -rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-wider text-white uppercase">
            Barber<span className="text-gold-500">Pro</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">O SISTEMA</a>
          <a href="#benefits" className="text-gray-300 hover:text-gold-400 transition-colors">BENEFÍCIOS</a>
          <a href="#demo" className="text-gray-300 hover:text-gold-400 transition-colors">DEMONSTRAÇÃO</a>
          <button className="px-6 py-2 border border-gold-500/30 text-gold-400 rounded hover:bg-gold-500 hover:text-neutral-900 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            ÁREA DO CLIENTE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;