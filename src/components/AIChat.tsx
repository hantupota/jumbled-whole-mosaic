
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PathAResult from './PathAResult';
import PathBResult from './PathBResult';
import PathCResult from './PathCResult';

type ChatStep = 'initial' | 'pathA1' | 'pathA2' | 'pathA3' | 'pathB1' | 'pathB2' | 'pathC1' | 'pathC2' | 'result';
type PathType = 'A' | 'B' | 'C' | null;

const AIChat = () => {
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

    // Progress through the steps
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
              Welcome to Omagna Ink, where ink meets destiny. Every journey is different. What brings you before us tonight?
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => handlePathSelect('A')}
                className="w-full max-w-md border border-molten-gold bg-transparent text-molten-gold hover:bg-molten-gold hover:text-obsidian transition-all duration-300 py-4"
              >
                [ A. I'm Ready to Create a New Legend ]
              </Button>
              <Button
                onClick={() => handlePathSelect('B')}
                className="w-full max-w-md border border-molten-gold bg-transparent text-molten-gold hover:bg-molten-gold hover:text-obsidian transition-all duration-300 py-4"
              >
                [ B. This is My First Step... I Need Guidance ]
              </Button>
              <Button
                onClick={() => handlePathSelect('C')}
                className="w-full max-w-md border border-molten-gold bg-transparent text-molten-gold hover:bg-molten-gold hover:text-obsidian transition-all duration-300 py-4"
              >
                [ C. I Wish to Rewrite an Old Story ]
              </Button>
            </div>
          </div>
        );

      case 'pathA1':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              A legend must know what they wish to destroy and what they must awaken. Let the ritual begin... What part of your old self will you DESTROY? (One Word)
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Enter one word..."
                className="bg-obsidian border-molten-gold text-alabaster"
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
              />
              <Button onClick={handleInputSubmit} className="bg-molten-gold text-obsidian hover:bg-yellow-600">
                Submit
              </Button>
            </div>
          </div>
        );

      case 'pathA2':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              What power will you AWAKEN? (One Word)
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Enter one word..."
                className="bg-obsidian border-molten-gold text-alabaster"
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
              />
              <Button onClick={handleInputSubmit} className="bg-molten-gold text-obsidian hover:bg-yellow-600">
                Submit
              </Button>
            </div>
          </div>
        );

      case 'pathA3':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              Name one SYMBOL that represents this power.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Enter your symbol..."
                className="bg-obsidian border-molten-gold text-alabaster"
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
              />
              <Button onClick={handleInputSubmit} className="bg-molten-gold text-obsidian hover:bg-yellow-600">
                Submit
              </Button>
            </div>
          </div>
        );

      case 'pathB1':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              The first step is the most sacred. Fear is natural. Let us turn it into courage. Answer these questions to build your blueprint... If your life were a movie, what genre would it be?
            </p>
            <div className="space-y-4">
              {['Action', 'Drama', 'Fantasy'].map((genre) => (
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
              Choose an element that calls to you:
            </p>
            <div className="space-y-4">
              {['Fire', 'Water', 'Earth', 'Air'].map((element) => (
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
              Rewriting the past is the highest form of art. We honor your trust. Tell us not about your old tattoo, but about the *new story* you wish to begin.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Tell us your new story..."
                className="bg-obsidian border-molten-gold text-alabaster"
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
              />
              <Button onClick={handleInputSubmit} className="bg-molten-gold text-obsidian hover:bg-yellow-600">
                Submit
              </Button>
            </div>
          </div>
        );

      case 'pathC2':
        return (
          <div className="text-center space-y-6">
            <p className="text-xl text-alabaster">
              What is the core energy of this new story? (e.g., 'Freedom', 'Strength', 'Peace')
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Enter core energy..."
                className="bg-obsidian border-molten-gold text-alabaster"
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
              />
              <Button onClick={handleInputSubmit} className="bg-molten-gold text-obsidian hover:bg-yellow-600">
                Submit
              </Button>
            </div>
          </div>
        );

      case 'result':
        if (selectedPath === 'A') return <PathAResult answers={userAnswers} />;
        if (selectedPath === 'B') return <PathBResult answers={userAnswers} />;
        if (selectedPath === 'C') return <PathCResult answers={userAnswers} />;
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

export default AIChat;
