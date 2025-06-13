
interface PathAResultIDProps {
  answers: string[];
}

const PathAResultID = ({ answers }: PathAResultIDProps) => {
  const [destroy, awaken, symbol] = answers;
  
  return (
    <div className="text-center space-y-8">
      <div className="bg-gradient-to-b from-yellow-900/30 to-amber-900/30 border border-molten-gold p-8 rounded-lg">
        <h2 className="font-cinzel text-3xl text-molten-gold mb-6">PROKLAMASI SEORANG LEGENDA</h2>
        <div className="text-alabaster text-lg leading-relaxed">
          <p>
            Pada malam suci ini, Jumat, 13 Juni 2025, sebuah perjanjian telah dibuat. 
            Dengan ini dinyatakan bahwa jiwa ini akan MENGHANCURKAN <span className="text-molten-gold font-bold">{destroy}</span>, 
            dan MEMBANGKITKAN kekuatan tak tergoyahkan dari <span className="text-molten-gold font-bold">{awaken}</span>. 
            Simbol sucinya, <span className="text-molten-gold font-bold">{symbol}</span>, 
            akan menjadi pengingat abadi dari transformasi ini.
          </p>
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

export default PathAResultID;
