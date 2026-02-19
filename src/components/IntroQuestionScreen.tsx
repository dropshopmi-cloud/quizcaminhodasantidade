import { useState } from 'react';

export interface IntroQuestion {
  question: string;
  options: string[];
}

interface IntroQuestionScreenProps {
  question: IntroQuestion;
  currentStep: number;   // global step (e.g. 1, 2, 3 for intro questions)
  totalSteps: number;    // total of all questions combined (intro + main)
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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 animate-fade-in-up">
      <div className="max-w-lg w-full">
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

        {/* Question */}
        <h2 className="font-cinzel text-xl md:text-2xl text-center text-foreground mb-8 leading-relaxed">
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
              <span className="text-foreground/90">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroQuestionScreen;
