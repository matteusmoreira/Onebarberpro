import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";

const ICONS = [
  { name: "WhatsApp", url: "https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg" },
  { name: "Stripe", url: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
  { name: "PayPal", url: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg" },
  { name: "Twilio", url: "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg" },
];

export default function Integrations() {
  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
        
      <div className="relative flex flex-col items-center text-center z-10 container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Conecte-se ao <span className="text-gold-500">Mundo</span>
        </h2>
        <div className="h-1 w-24 bg-gold-600 mx-auto rounded-full mb-6"></div>
        
        <p className="mb-12 max-w-2xl text-gray-400 lg:text-xl">
          Integre seu sistema OneBarber Pro com as ferramentas que você já usa e ama. Pagamentos, agenda e comunicação em um só lugar.
        </p>

        <div className="w-full max-w-4xl mx-auto mt-8 relative">
            {/* Gradient masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none"></div>

            <InfiniteSlider gap={40} duration={20} className="py-4">
                {ICONS.map((icon, index) => (
                    <div key={index} className="flex flex-col items-center justify-center group mx-4">
                        <div className="bg-neutral-900 p-4 rounded-2xl border border-neutral-800 shadow-lg shadow-black/50 group-hover:border-gold-500/50 group-hover:scale-110 transition-all duration-300">
                            <img
                                src={icon.url}
                                alt={icon.name}
                                className="h-16 w-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                        <span className="mt-3 text-sm font-medium text-gray-500 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transform">
                            {icon.name}
                        </span>
                    </div>
                ))}
                 {/* Duplicate for better spacing/filling if needed, but InfiniteSlider handles duplication internally for loop. 
                     However, 4 items might be too few for a wide screen loop. Let's double the list to ensure smooth looping on wide screens. */}
                {ICONS.map((icon, index) => (
                    <div key={`dup-${index}`} className="flex flex-col items-center justify-center group mx-4">
                        <div className="bg-neutral-900 p-4 rounded-2xl border border-neutral-800 shadow-lg shadow-black/50 group-hover:border-gold-500/50 group-hover:scale-110 transition-all duration-300">
                            <img
                                src={icon.url}
                                alt={icon.name}
                                className="h-16 w-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                        <span className="mt-3 text-sm font-medium text-gray-500 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transform">
                            {icon.name}
                        </span>
                    </div>
                ))}
            </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
