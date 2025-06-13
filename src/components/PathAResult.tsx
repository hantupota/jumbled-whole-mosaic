
interface PathAResultProps {
  answers: string[];
}

const PathAResult = ({ answers }: PathAResultProps) => {
  const [destroy, awaken, symbol] = answers;
  
  return (
    <div className="text-center space-y-8">
      <div className="bg-gradient-to-b from-yellow-900/30 to-amber-900/30 border border-molten-gold p-8 rounded-lg">
        <h2 className="font-cinzel text-3xl text-molten-gold mb-6">THE PROCLAMATION OF A LEGEND</h2>
        <div className="text-alabaster text-lg leading-relaxed">
          <p>
            On this sacred night, Friday, June 13, 2025, a pact has been made. 
            It is hereby declared that this soul shall DESTROY <span className="text-molten-gold font-bold">{destroy}</span>, 
            and AWAKEN the unwavering power of <span className="text-molten-gold font-bold">{awaken}</span>. 
            Its sacred symbol, The <span className="text-molten-gold font-bold">{symbol}</span>, 
            shall be an eternal reminder of this transformation.
          </p>
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

export default PathAResult;
