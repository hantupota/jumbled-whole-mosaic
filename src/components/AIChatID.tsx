
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PathAResultID from './PathAResultID';
import PathBResultID from './PathBResultID';
import PathCResultID from './PathCResultID';

type ChatStep = 'initial' | 'pathA1' | 'pathA2' | 'pathA3' | 'pathB1' | 'pathB2' | 'pathC1' | 'pathC2' | 'result';
type PathType = 'A' | 'B' | 'C' | null;

const AIChatID = () => {
  const [currentStep, setCurrentStep] = useState<ChatStep>('initial');
  const [selectedPath, setSelectedPath] = useState<PathType>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');

  const handlePathSelect = (path: PathType) => {
    setSelectedPath(path);
    if (path === 'A') setCurrentStep('pathA1');
    if (path === 'B') setCurrentStep('pathB1');
    if (path === 'C') setCurrentStep('pathC1');
  };

  const handleInputSubmit = () => {
    if (!currentInput.trim()) return;
    
    const newAnswers = [...userAnswers, currentInput];
    setUserAnswers(newAnswers);
    setCurrentInput('');

    if (selectedPath === 'A') {
      if (currentStep === 'pathA1') setCurrentStep('pathA2');
      else if (currentStep === 'pathA2') setCurrentStep('pathA3');
      else if (currentStep === 'pathA3') setCurrentStep('result');
    } else if (selectedPath === 'B') {
      if (currentStep === 'pathB1') setCurrentStep('pathB2');
      else if (currentStep === 'pathB2') setCurrentStep('result');
    } else if (selectedPath === 'C') {
      if (currentStep === 'pathC1') setCurrentStep('pathC2');
      else if (currentStep === 'pathC2') setCurrentStep('result');
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'initial':
        return (
          <div className="text-center space-y-8">
            <p className="text-xl text-alabaster mb-8">
              Selamat datang di Omagna Ink, di mana tinta bertemu takdir. Setiap perjalanan berbeda. Apa yang membawa Anda ke hadapan kami malam ini?
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => handlePathSelect('A')}
                className="w-full max-w-md border border-molten-gold bg-transparent text-molten-gold hover:bg-molten-gold hover:text-obsidian transition-all duration-300 py-4"
              >
                [ Saya Siap Menciptakan Legenda Baru ]
              </Button>
              <Button
                onClick={() => handlePathSelect('B')}
                className="w-full max-w-md border border-molten-gold bg-transparent text-molten-gold hover:bg-molten-gold hover:text-obsidian transition-all duration-300 py-4"
              >
                [ Ini Langkah Pertama Saya... Saya Butuh Panduan ]
              </Button>
              <Button
                onClick={() => handlePathSelect('C')}
                className="w-full max-w-md border border-molten-gold bg-transparent text-molten-gold hover:bg-molten-gold hover:text-obsidian transition-all duration-300 py-4"
              >
                [ Saya Ingin Menulis Ulang Cerita Lama ]
              </Button>
            </div>
          </div>
        );

      case 'pathA1':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              Seorang legenda harus tahu apa yang ingin mereka hancurkan dan apa yang harus mereka bangkitkan. Mari ritual dimulai. Bagian apa dari diri lama Anda yang akan Anda HANCURKAN? (Satu Kata Saja)
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Masukkan satu kata..."
                className="bg-obsidian border-molten-gold text-alabaster"
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
              />
              <Button onClick={handleInputSubmit} className="bg-molten-gold text-obsidian hover:bg-yellow-600">
                Kirim
              </Button>
            </div>
          </div>
        );

      case 'pathA2':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              Kekuatan apa yang akan Anda BANGKITKAN? (Satu Kata Saja)
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Masukkan satu kata..."
                className="bg-obsidian border-molten-gold text-alabaster"
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
              />
              <Button onClick={handleInputSubmit} className="bg-molten-gold text-obsidian hover:bg-yellow-600">
                Kirim
              </Button>
            </div>
          </div>
        );

      case 'pathA3':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              Dan akhirnya, sebutkan SIMBOL yang mewakili kekuatan ini.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Masukkan simbol Anda..."
                className="bg-obsidian border-molten-gold text-alabaster"
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
              />
              <Button onClick={handleInputSubmit} className="bg-molten-gold text-obsidian hover:bg-yellow-600">
                Kirim
              </Button>
            </div>
          </div>
        );

      case 'pathB1':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              Langkah pertama adalah yang paling suci. Takut itu wajar. Mari kita ubah menjadi keberanian. Pertama, ceritakan padaku, jika hidup Anda adalah sebuah cerita, genre apa yang akan dipilih?
            </p>
            <div className="space-y-4">
              {['Petualangan', 'Misteri', 'Drama'].map((genre) => (
                <Button
                  key={genre}
                  onClick={() => {
                    setUserAnswers([...userAnswers, genre]);
                    setCurrentStep('pathB2');
                  }}
                  className="w-full max-w-md border border-molten-gold bg-transparent text-molten-gold hover:bg-molten-gold hover:text-obsidian transition-all duration-300"
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
        );

      case 'pathB2':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              Menarik. Sekarang, pilih elemen yang memanggil Anda:
            </p>
            <div className="space-y-4">
              {['Api', 'Air', 'Tanah', 'Udara'].map((element) => (
                <Button
                  key={element}
                  onClick={() => {
                    setUserAnswers([...userAnswers, element]);
                    setCurrentStep('result');
                  }}
                  className="w-full max-w-md border border-molten-gold bg-transparent text-molten-gold hover:bg-molten-gold hover:text-obsidian transition-all duration-300"
                >
                  {element}
                </Button>
              ))}
            </div>
          </div>
        );

      case 'pathC1':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              Menulis ulang masa lalu adalah bentuk seni tertinggi. Kami menghormati kepercayaan Anda. Ceritakan bukan tentang tanda lama, tetapi tentang cerita baru yang ingin Anda mulai.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Ceritakan cerita baru Anda..."
                className="bg-obsidian border-molten-gold text-alabaster"
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
              />
              <Button onClick={handleInputSubmit} className="bg-molten-gold text-obsidian hover:bg-yellow-600">
                Kirim
              </Button>
            </div>
          </div>
        );

      case 'pathC2':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              Apa energi inti dari cerita baru ini? (mis., 'Kebebasan', 'Pertumbuhan', 'Kedamaian')
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Masukkan energi inti..."
                className="bg-obsidian border-molten-gold text-alabaster"
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
              />
              <Button onClick={handleInputSubmit} className="bg-molten-gold text-obsidian hover:bg-yellow-600">
                Kirim
              </Button>
            </div>
          </div>
        );

      case 'result':
        if (selectedPath === 'A') return <PathAResultID answers={userAnswers} />;
        if (selectedPath === 'B') return <PathBResultID answers={userAnswers} />;
        if (selectedPath === 'C') return <PathCResultID answers={userAnswers} />;
        return null;

      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="bg-obsidian/90 backdrop-blur rounded-lg p-8 border border-molten-gold/30">
        {renderCurrentStep()}
      </div>
    </section>
  );
};

export default AIChatID;
