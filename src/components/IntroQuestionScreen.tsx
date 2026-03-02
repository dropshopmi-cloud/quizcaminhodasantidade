import { useState } from 'react';

export interface IntroQuestion {
  question: string;
  options: string[];
  image?: string;
}

interface IntroQuestionScreenProps {
  question: IntroQuestion;
  currentStep: number;
  totalSteps: number;
  onAnswer: (answer: string) => void;
}

const IntroQuestionScreen = ({ question, currentStep, totalSteps, onAnswer }: IntroQuestionScreenProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const handleSelect = (option: string) => {
    if (transitioning) return;
    setSelected(option);
    setTransitioning(true);
    setTimeout(() => {
      onAnswer(option);
      setSelected(null);
      setTransitioning(false);
    }, 600);
  };

  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full animate-fade-in-up">
        {/* Unified Progress Bar */}
        <div className="w-full mb-8">
          <div className="flex justify-between text-sm text-foreground/70 mb-2">
            <span>Pergunta {currentStep} de {totalSteps}</span>
            <span className="text-gold">{percentage}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="sacred-card">
          {/* Question Image */}
          {question.image && (
            <div className="relative mb-6 rounded-lg overflow-hidden">
              <img
                src={question.image}
                alt="Pergunta"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          )}

          {/* Question */}
          <h2 className="text-xl md:text-2xl font-cinzel text-center text-foreground mb-6 leading-relaxed">
            {question.question}
          </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              disabled={transitioning}
              className={`answer-option w-full text-left font-lora ${
                selected === option ? 'selected' : ''
              } ${transitioning && selected !== option ? 'opacity-50' : ''}`}
            >
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold font-cinzel text-sm shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-foreground/90">{option}</span>
              </span>
            </button>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default IntroQuestionScreen;
