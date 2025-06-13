
import TrustSectionID from './TrustSectionID';

interface PathAResultIDProps {
  answers: string[];
}

const PathAResultID = ({ answers }: PathAResultIDProps) => {
  const [destroy, awaken, symbol] = answers;
  
  return (
    <div className="text-center space-y-8">
      <div className="bg-gradient-to-b from-yellow-900/30 to-amber-900/30 border border-molten-gold p-8 rounded-lg" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}>
        <h2 className="font-cinzel text-3xl text-molten-gold mb-6">PROKLAMASI SEORANG LEGENDA</h2>
        <div className="text-alabaster text-lg leading-relaxed">
          <p>
            Pada malam suci ini, Jumat, 13 Juni 2025, sebuah perjanjian telah dibuat. 
            Dengan ini dinyatakan bahwa jiwa ini akan MENGHANCURKAN <span className="text-molten-gold font-bold">{destroy}</span>, 
            dan MEMBANGKITKAN kekuatan tak tergoyahkan dari <span className="text-molten-gold font-bold">{awaken}</span>. 
            Simbol sucinya, <span className="text-molten-gold font-bold">{symbol}</span>, 
            akan menjadi pengingat abadi, terukir bukan di kulit, tetapi di inti keberadaan itu sendiri. 
            Nasib lama sudah usang. Legenda baru telah dimulai.
          </p>
        </div>
      </div>
      
      <TrustSectionID />
    </div>
  );
};

export default PathAResultID;
