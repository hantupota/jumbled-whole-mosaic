
import { useState } from 'react';
import HeroSectionID from '@/components/HeroSectionID';
import AIChatID from '@/components/AIChatID';
import GalleryID from '@/components/GalleryID';
import FooterID from '@/components/FooterID';
import LanguageToggle from '@/components/LanguageToggle';

const Indonesian = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-alabaster font-lato">
      <LanguageToggle currentLang="id" />
      <HeroSectionID onEnter={() => setShowChat(true)} />
      {showChat && (
        <div className="animate-fade-in">
          <AIChatID />
          <GalleryID />
          <FooterID />
        </div>
      )}
    </div>
  );
};

export default Indonesian;
