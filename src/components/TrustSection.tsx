
import { Button } from "@/components/ui/button";

const TrustSection = () => {
  return (
    <div className="mt-12 p-6 bg-obsidian/50 border border-molten-gold/50 rounded-lg">
      <h3 className="font-cinzel text-2xl text-molten-gold mb-4">Our Sacred Vow</h3>
      <p className="text-alabaster text-lg mb-6">
        Whichever path you walk, all journeys at Omagna are bound by one vow: 
        <em className="text-molten-gold"> Consent is Paramount, Safety is Absolute, and Respect is Unconditional</em>.
      </p>
      <Button className="border border-molten-gold text-molten-gold bg-transparent px-6 py-3 rounded hover:bg-molten-gold hover:text-obsidian transition-all duration-300">
        [ Read Our Full Declaration of Ethics ]
      </Button>
    </div>
  );
};

export default TrustSection;
