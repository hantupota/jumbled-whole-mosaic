
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const whatsappNumbers = [
    { location: 'Jakarta', number: '+6285921896058' },
    { location: 'Jakarta', number: '+6287772563170' },
    { location: 'Sihanoukville', number: '+85592376291' },
    { location: 'Sihanoukville', number: '+85581238043' },
    { location: 'Poipet', number: '+85561741946' }
  ];

  return (
    <footer className="py-20 px-4 bg-obsidian border-t border-molten-gold/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl text-molten-gold mb-8">The Sanctuary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-molten-gold text-xl font-bold mb-4">Jakarta</h3>
              <div className="space-y-2">
                <a href="https://wa.me/6285921896058" className="block text-alabaster hover:text-molten-gold transition-colors">
                  +62 859-2189-6058
                </a>
                <a href="https://wa.me/6287772563170" className="block text-alabaster hover:text-molten-gold transition-colors">
                  +62 877-7256-3170
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-molten-gold text-xl font-bold mb-4">Sihanoukville</h3>
              <div className="space-y-2">
                <a href="https://wa.me/85592376291" className="block text-alabaster hover:text-molten-gold transition-colors">
                  +855 92 376 291
                </a>
                <a href="https://wa.me/85581238043" className="block text-alabaster hover:text-molten-gold transition-colors">
                  +855 81 238 043
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-molten-gold text-xl font-bold mb-4">Poipet</h3>
              <div className="space-y-2">
                <a href="https://wa.me/85561741946" className="block text-alabaster hover:text-molten-gold transition-colors">
                  +855 61 741 946
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="https://tiktok.com/@omagna.ink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-molten-gold hover:text-alabaster transition-colors text-2xl"
            >
              TikTok
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
