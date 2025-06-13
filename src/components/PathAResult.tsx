
import TrustSection from './TrustSection';

interface PathAResultProps {
  answers: string[];
}

const PathAResult = ({ answers }: PathAResultProps) => {
  const [destroy, awaken, symbol] = answers;
  
  return (
    <div className="text-center space-y-8">
      <div className="bg-gradient-to-b from-yellow-900/30 to-amber-900/30 border border-molten-gold p-8 rounded-lg" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}>
        <h2 className="font-cinzel text-3xl text-molten-gold mb-6">PROCLAMATION OF A LEGEND</h2>
        <div className="text-alabaster text-lg leading-relaxed">
          <p>
            On this sacred night, Friday, June 13, 2025, a pact has been made. 
            It is hereby declared that this soul shall DESTROY <span className="text-molten-gold font-bold">{destroy}</span>, 
            and AWAKEN the unwavering power of <span className="text-molten-gold font-bold">{awaken}</span>. 
            Its sacred symbol, The <span className="text-molten-gold font-bold">{symbol}</span>, 
            shall be an eternal reminder, etched not on skin, but in the very core of being. 
            The old fate is obsolete. A new legend has begun.
          </p>
        </div>
      </div>
      
      <TrustSection />
    </div>
  );
};

export default PathAResult;
