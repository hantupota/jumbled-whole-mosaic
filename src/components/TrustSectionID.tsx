
import { Button } from "@/components/ui/button";

const TrustSectionID = () => {
  return (
    <div className="mt-12 p-6 bg-obsidian/50 border border-molten-gold/50 rounded-lg">
      <h3 className="font-cinzel text-2xl text-molten-gold mb-4">Sumpah Suci Kami</h3>
      <p className="text-alabaster text-lg mb-6">
        Jalur mana pun yang Anda tempuh, semua perjalanan di Omagna terikat oleh satu sumpah: 
        <em className="text-molten-gold"> Persetujuan adalah Utama, Keamanan adalah Mutlak, dan Rasa Hormat adalah Tanpa Syarat</em>.
      </p>
      <Button className="border border-molten-gold text-molten-gold bg-transparent px-6 py-3 rounded hover:bg-molten-gold hover:text-obsidian transition-all duration-300">
        [ Baca Deklarasi Etika Lengkap Kami ]
      </Button>
    </div>
  );
};

export default TrustSectionID;
