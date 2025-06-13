
import { useEffect } from 'react';

const Gallery = () => {
  useEffect(() => {
    // Load the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-12">
          THE GALLERY OF LEGENDS
        </h2>
        
        <div className="w-full">
          <div 
            className="elfsight-app-d9a3c1c3-6340-4c1b-a811-622557b9b979" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
