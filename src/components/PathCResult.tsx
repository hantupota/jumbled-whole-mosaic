
interface PathCResultProps {
  answers: string[];
}

const PathCResult = ({ answers }: PathCResultProps) => {
  const [newStory, coreEnergy] = answers;
  
  return (
    <div className="text-center space-y-8">
      <div className="bg-gradient-to-b from-red-900/30 to-orange-900/30 border border-molten-gold p-8 rounded-lg">
        <h2 className="font-cinzel text-3xl text-molten-gold mb-6">YOUR RESURRECTION CONCEPT</h2>
        
        <div className="text-left space-y-6 text-alabaster">
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Transformation Analysis:</h3>
            <p className="text-lg">From 'A Mark of Regret' to 'A Symbol of <span className="text-molten-gold">{coreEnergy}</span>'.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Artistic Direction:</h3>
            <p className="text-lg">We recommend a dynamic style like <em className="text-molten-gold">Japanese Irezumi</em> to flow over the old lines and transform your vision into reality.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Your New Story:</h3>
            <p className="text-lg italic">"{newStory}"</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Proof of Concept:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="text-center">
                <img
                  src="https://omagna.ink/wp-content/uploads/2025/03/1800-by-1024.png"
                  alt="Before transformation"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-alabaster">Before</p>
              </div>
              <div className="text-center">
                <img
                  src="https://omagna.ink/wp-content/uploads/2025/03/e800-by-1024.png"
                  alt="After transformation"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-alabaster">After</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Process Guarantee:</h3>
            <p className="text-lg">Every resurrection project is a deep collaboration. We guarantee transparency from the first sketch to the final touch.</p>
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

export default PathCResult;
