
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://omagna.ink/wp-content/uploads/2025/03/web2.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold text-alabaster mb-12 leading-tight">
          RESTLESS SOULS<br />
          AWAKEN IN DARKNESS.
        </h1>
        
        <Button
          onClick={onEnter}
          className="border-2 border-molten-gold bg-transparent text-molten-gold hover:bg-molten-gold hover:text-obsidian transition-all duration-300 px-8 py-4 text-lg font-lato animate-pulse-gold"
        >
          [ Enter the Sanctuary ]
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
