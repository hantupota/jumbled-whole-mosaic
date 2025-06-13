
interface PathBResultIDProps {
  answers: string[];
}

const PathBResultID = ({ answers }: PathBResultIDProps) => {
  const [genre, element] = answers;
  
  const getProfile = (genre: string, element: string) => {
    if (genre === 'Aksi' && element === 'Api') return 'Pejuang Berani';
    if (genre === 'Drama' && element === 'Air') return 'Pencerita Emosional';
    if (genre === 'Fantasi' && element === 'Tanah') return 'Mistikus Membumi';
    return 'Visioner Pragmatis';
  };

  const getStyles = (element: string) => {
    switch (element) {
      case 'Api': return 'Geometris atau Tradisional Tebal';
      case 'Air': return 'Cat Air atau Organik Mengalir';
      case 'Tanah': return 'Blackwork atau Dotwork';
      case 'Udara': return 'Garis Halus atau Minimalis';
      default: return 'Geometris atau Blackwork';
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
        <h2 className="font-cinzel text-3xl text-molten-gold mb-6">BLUEPRINT TINTA PERTAMA ANDA</h2>
        
        <div className="text-left space-y-6 text-alabaster">
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Profil Jiwa Artistik:</h3>
            <p className="text-lg">{getProfile(genre, element)}</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Gaya yang Direkomendasikan:</h3>
            <p className="text-lg">Jiwa Anda beresonansi dengan <em className="text-molten-gold">{getStyles(element)}</em>.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Peta Rasa Sakit (Contoh):</h3>
            <p className="text-lg">Lengan: 3/10 (Rendah). Rusuk: 8/10 (Tinggi). Kami akan memandu Anda.</p>
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
      
      <div className="mt-12 p-6 bg-obsidian/50 border border-molten-gold/50 rounded-lg">
        <h3 className="font-cinzel text-2xl text-molten-gold mb-4">Sumpah Suci Kami</h3>
        <p className="text-alabaster text-lg mb-6">
          Jalur mana pun yang Anda tempuh, semua perjalanan di Omagna terikat oleh satu sumpah: 
          <em className="text-molten-gold"> Persetujuan adalah Utama, Keamanan adalah Mutlak, dan Rasa Hormat adalah Tanpa Syarat</em>.
        </p>
        <button className="border border-molten-gold text-molten-gold px-6 py-3 rounded hover:bg-molten-gold hover:text-obsidian transition-all duration-300">
          [ Baca Deklarasi Etika Lengkap Kami ]
        </button>
      </div>
    </div>
  );
};

export default PathBResultID;
