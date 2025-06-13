
import TrustSection from './TrustSection';

interface PathBResultProps {
  answers: string[];
}

const PathBResult = ({ answers }: PathBResultProps) => {
  const [genre, element] = answers;
  
  const artists = [
    { name: 'Cuyo Ink', image: 'https://omagna.ink/wp-content/uploads/2025/03/cuyo-Artists-800x1000-1.webp' },
    { name: 'Magna Bucu', image: 'https://omagna.ink/wp-content/uploads/2025/03/bucu-Artists-800x1000-1.webp' },
    { name: 'DIDIK', image: 'https://omagna.ink/wp-content/uploads/2025/03/didik-Artists-800x1000-1.webp' },
    { name: 'NICHI', image: 'https://omagna.ink/wp-content/uploads/2025/03/nichi-Artists-800x1000-1.webp' }
  ];

  return (
    <div className="text-center space-y-8">
      <div className="bg-gradient-to-b from-blue-900/30 to-purple-900/30 border border-molten-gold p-8 rounded-lg">
        <h2 className="font-cinzel text-3xl text-molten-gold mb-6">YOUR FIRST INK BLUEPRINT</h2>
        
        <div className="text-left space-y-6 text-alabaster">
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Your Artistic Soul:</h3>
            <p className="text-lg">The Methodical Explorer</p>
          </div>
          
          <div>
            <p className="text-lg">Your answers suggest a soul that values both meaning and structure. The best styles for you are those with clean lines and deep symbolism, such as <em className="text-molten-gold">Geometric</em>, <em className="text-molten-gold">Blackwork</em>, or <em className="text-molten-gold">Sacred Geometry</em>. These styles offer timeless power.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Pain Map:</h3>
            <p className="text-lg">For a first experience, we recommend the forearm (Pain: 3/10) or calf (Pain: 4/10). We will guide you through every step comfortably.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Safety Guarantee:</h3>
            <p className="text-lg">Your safety is our absolute priority. We use 100% single-use needles, opened in front of you. Always.</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-molten-gold text-xl font-bold mb-4">Recommended Artists:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artists.map((artist, index) => (
              <div key={index} className="text-center">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-alabaster">{artist.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <TrustSection />
    </div>
  );
};

export default PathBResult;
