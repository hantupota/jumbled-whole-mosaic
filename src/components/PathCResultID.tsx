
import TrustSectionID from './TrustSectionID';

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
            <h3 className="text-molten-gold text-xl font-bold mb-2">Dari Kenangan yang Pudar ke Masa Depan yang Berani:</h3>
            <p className="text-lg">Keinginan Anda untuk '{coreEnergy}' membutuhkan desain yang mengalir dan bernapas. Kami merekomendasikan gaya dinamis seperti <em className="text-molten-gold">Irezumi Jepang</em> untuk menggunakan garis lama sebagai panduan gerakan baru, atau karya <em className="text-molten-gold">Neotraditional</em> yang penuh warna untuk sepenuhnya mendefinisikan ulang area dengan warna dan kehidupan yang berani.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Cerita Baru Anda:</h3>
            <p className="text-lg italic">"{newStory}"</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Bukti Konsep:</h3>
            <p className="text-lg mb-4">Kami adalah spesialis dalam transformasi. Inilah bagaimana kami mengubah cerita masa lalu menjadi karya agung baru.</p>
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
            <p className="text-lg">Setiap kebangkitan adalah kolaborasi mendalam. Kami menjamin transparansi dari sketsa pertama hingga sentuhan terakhir.</p>
          </div>
        </div>
      </div>
      
      <TrustSectionID />
    </div>
  );
};

export default PathCResultID;
