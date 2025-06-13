
interface PathCResultIDProps {
  answers: string[];
}

const PathCResultID = ({ answers }: PathCResultIDProps) => {
  const [newStory, coreEnergy] = answers;
  
  return (
    <div className="text-center space-y-8">
      <div className="bg-gradient-to-b from-red-900/30 to-orange-900/30 border border-molten-gold p-8 rounded-lg">
        <h2 className="font-cinzel text-3xl text-molten-gold mb-6">KONSEP KEBANGKITAN ANDA</h2>
        
        <div className="text-left space-y-6 text-alabaster">
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Analisis Transformasi:</h3>
            <p className="text-lg">Dari 'Tanda Penyesalan' menjadi 'Simbol <span className="text-molten-gold">{coreEnergy}</span>'.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Arah Artistik:</h3>
            <p className="text-lg">Kami merekomendasikan gaya dinamis seperti <em className="text-molten-gold">Irezumi Jepang</em> untuk mengalir di atas garis lama dan mengubah visi Anda menjadi kenyataan.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Cerita Baru Anda:</h3>
            <p className="text-lg italic">"{newStory}"</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Bukti Konsep:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="text-center">
                <img
                  src="https://omagna.ink/wp-content/uploads/2025/03/1800-by-1024.png"
                  alt="Sebelum transformasi"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-alabaster">Sebelum</p>
              </div>
              <div className="text-center">
                <img
                  src="https://omagna.ink/wp-content/uploads/2025/03/e800-by-1024.png"
                  alt="Setelah transformasi"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-alabaster">Setelah</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Jaminan Proses:</h3>
            <p className="text-lg">Setiap proyek kebangkitan adalah kolaborasi mendalam. Kami menjamin transparansi dari sketsa pertama hingga sentuhan terakhir.</p>
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

export default PathCResultID;
