import React from 'react';
import { Scissors, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <img
              src="https://nestarts.com.br/wp-content/uploads/2025/11/ONE-BARBER-PRO-PNG-1.png"
              alt="OneBarber Pro"
              className="h-20 w-auto"
            />
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2025 - Sistema de Agendamento Vitalício | Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
