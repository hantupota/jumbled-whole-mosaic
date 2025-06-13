
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AIChat from '@/components/AIChat';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-alabaster font-lato">
      <LanguageToggle currentLang="en" />
      <HeroSection onEnter={() => setShowChat(true)} />
      {showChat && (
        <div className="animate-fade-in">
          <AIChat />
          <Gallery />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
