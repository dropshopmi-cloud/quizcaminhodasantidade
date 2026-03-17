import { useState } from 'react';
import { QuizQuestion } from '@/data/quizData';
import ProgressBar from './ProgressBar';

interface QuizQuestionCardProps {
  question: QuizQuestion;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
}

const QuizQuestionCard = ({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer 
}: QuizQuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (option: string) => {
    if (isTransitioning) return;
    
    setSelectedAnswer(option);
    setIsTransitioning(true);
    
    setTimeout(() => {
      onAnswer(option);
      setSelectedAnswer(null);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full animate-fade-in-up">
        <ProgressBar current={currentQuestion} total={totalQuestions} />
        
        {/* Theme Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-gold/20 text-gold border border-gold/30">
            {question.theme}
          </span>
        </div>

        {/* Question Card */}
        <div className="sacred-card">
          {/* Question Image (Removed) */}

          {/* Question */}
          <h2 className="text-xl md:text-2xl font-cinzel text-center text-foreground mb-6 leading-relaxed">
            {question.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                disabled={isTransitioning}
                className={`answer-option w-full text-left font-lora ${
                  selectedAnswer === option ? 'selected' : ''
                } ${isTransitioning && selectedAnswer !== option ? 'opacity-50' : ''}`}
              >
                <span className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold font-cinzel text-sm">
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

export default QuizQuestionCard;
