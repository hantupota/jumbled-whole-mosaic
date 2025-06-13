
import TrustSection from './TrustSection';

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
            <h3 className="text-molten-gold text-xl font-bold mb-2">From a Faded Memory to a Bold Future:</h3>
            <p className="text-lg">Your desire for '{coreEnergy}' calls for a design that flows and breathes. We recommend a dynamic style like <em className="text-molten-gold">Japanese Irezumi</em> to use the old lines as a guide for new movement, or a vibrant <em className="text-molten-gold">Neotraditional</em> piece to completely redefine the area with bold color and life.</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Your New Story:</h3>
            <p className="text-lg italic">"{newStory}"</p>
          </div>
          
          <div>
            <h3 className="text-molten-gold text-xl font-bold mb-2">Proof of Concept:</h3>
            <p className="text-lg mb-4">We are specialists in transformation. Here is how we turned a past story into a new masterpiece.</p>
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
            <p className="text-lg">Every resurrection is a deep collaboration. We guarantee transparency from the first sketch to the final touch.</p>
          </div>
        </div>
      </div>
      
      <TrustSection />
    </div>
  );
};

export default PathCResult;
