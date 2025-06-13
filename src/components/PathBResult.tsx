
interface PathBResultProps {
  answers: string[];
}

const PathBResult = ({ answers }: PathBResultProps) => {
  const [genre, element] = answers;
  
  const getProfile = (genre: string, element: string) => {
    if (genre === 'Action' && element === 'Fire') return 'The Bold Warrior';
    if (genre === 'Drama' && element === 'Water') return 'The Emotional Storyteller';
    if (genre === 'Fantasy' && element === 'Earth') return 'The Grounded Mystic';
    return 'The Pragmatic Visionary';
  };

  const getStyles = (element: string) => {
    switch (element) {
      case 'Fire': return 'Geometric or Bold Traditional';
      case 'Water': return 'Watercolor or Flowing Organic';
      case 'Earth': return 'Blackwork or Dotwork';
      case 'Air': return 'Fine Line or Minimalist';
      default: return 'Geometric or Blackwork';
    }
  };

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
            <h3 className="text-molten-gold text-xl font-bold mb-2">Artistic Soul Profile:</h3>
            <p className="text-lg">{getProfile(genre, element)}</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Recommended Styles:</h3>
            <p className="text-lg">Your soul resonates with <em className="text-molten-gold">{getStyles(element)}</em>.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Pain Map (Example):</h3>
            <p className="text-lg">Forearm: 3/10 (Low). Ribs: 8/10 (High). We'll guide you.</p>
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
      
      <div className="mt-12 p-6 bg-obsidian/50 border border-molten-gold/50 rounded-lg">
        <h3 className="font-cinzel text-2xl text-molten-gold mb-4">Our Sacred Vow</h3>
        <p className="text-alabaster text-lg mb-6">
          Whichever path you walk, all journeys at Omagna are bound by one vow: 
          <em className="text-molten-gold"> Consent is Paramount, Safety is Absolute, and Respect is Unconditional</em>.
        </p>
        <button className="border border-molten-gold text-molten-gold px-6 py-3 rounded hover:bg-molten-gold hover:text-obsidian transition-all duration-300">
          [ Read Our Full Declaration of Ethics ]
        </button>
      </div>
    </div>
  );
};

export default PathBResult;
