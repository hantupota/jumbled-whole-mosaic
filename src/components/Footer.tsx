
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-obsidian border-t border-molten-gold/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl text-molten-gold mb-8">Connect With The Coven</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-molten-gold text-xl font-bold mb-4">📍 OMAGNA INK JAKARTA 🇮🇩</h3>
              <div className="space-y-2">
                <a href="https://api.whatsapp.com/send?phone=6285921896058" className="block text-alabaster hover:text-molten-gold transition-colors">
                  +6285921896058
                </a>
                <a href="https://api.whatsapp.com/send?phone=6287772563170" className="block text-alabaster hover:text-molten-gold transition-colors">
                  +6287772563170
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-molten-gold text-xl font-bold mb-4">📍 OMAGNA INK SIHANOUKVILLE 🇰🇭</h3>
              <div className="space-y-2">
                <a href="https://api.whatsapp.com/send?phone=85592376291" className="block text-alabaster hover:text-molten-gold transition-colors">
                  +85592376291
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-molten-gold text-xl font-bold mb-4">📍 OMAGNA INK POIPET 🇰🇭</h3>
              <div className="space-y-2">
                <a href="https://api.whatsapp.com/send?phone=85581238043" className="block text-alabaster hover:text-molten-gold transition-colors">
                  +85581238043
                </a>
                <a href="https://api.whatsapp.com/send?phone=85561741946" className="block text-alabaster hover:text-molten-gold transition-colors">
                  +85561741946
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="https://tiktok.com/@omagna.ink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-molten-gold hover:text-alabaster transition-colors"
            >
              <Tiktok size={32} />
            </a>
            <a 
              href="https://instagram.com/omagna.ink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-molten-gold hover:text-alabaster transition-colors"
            >
              <Instagram size={32} />
            </a>
            <a 
              href="https://facebook.com/omagnainkstudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-molten-gold hover:text-alabaster transition-colors"
            >
              <Facebook size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
