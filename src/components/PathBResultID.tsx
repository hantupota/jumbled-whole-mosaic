
import TrustSectionID from './TrustSectionID';

interface PathBResultIDProps {
  answers: string[];
}

const PathBResultID = ({ answers }: PathBResultIDProps) => {
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
        <h2 className="font-cinzel text-3xl text-molten-gold mb-6">BLUEPRINT TINTA PERTAMA ANDA</h2>
        
        <div className="text-left space-y-6 text-alabaster">
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Jiwa Artistik Anda:</h3>
            <p className="text-lg">Penjelajah Metodis</p>
          </div>
          
          <div>
            <p className="text-lg">Jawaban Anda menunjukkan jiwa yang menghargai makna dan struktur. Gaya terbaik untuk Anda adalah yang memiliki garis bersih dan simbolisme mendalam, seperti <em className="text-molten-gold">Geometris</em>, <em className="text-molten-gold">Blackwork</em>, atau <em className="text-molten-gold">Geometri Suci</em>. Gaya-gaya ini menawarkan kekuatan abadi.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Peta Rasa Sakit:</h3>
            <p className="text-lg">Untuk pengalaman pertama, kami merekomendasikan lengan bawah (Rasa Sakit: 3/10) atau betis (Rasa Sakit: 4/10). Kami akan memandu Anda melalui setiap langkah dengan nyaman.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Jaminan Keamanan:</h3>
            <p className="text-lg">Keamanan Anda adalah prioritas mutlak kami. Kami menggunakan 100% jarum sekali pakai, dibuka di depan Anda. Selalu.</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-molten-gold text-xl font-bold mb-4">Artis yang Direkomendasikan:</h3>
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
      
      <TrustSectionID />
    </div>
  );
};

export default PathBResultID;
