import { useState, useCallback } from 'react';
import { quizQuestions } from '@/data/quizData';
import { useAudio } from '@/hooks/useAudio';
import WelcomeScreen from '@/components/WelcomeScreen';
import QuizQuestionCard from '@/components/QuizQuestionCard';
import LoadingScreen from '@/components/LoadingScreen';
import ResultScreen from '@/components/ResultScreen';
import AudioControl from '@/components/AudioControl';

type QuizState = 'welcome' | 'quiz' | 'loading' | 'result';

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  
  const { isMuted, hasEnded, play, toggleMute } = useAudio('/audio/oracao-quiz.mp4');

  const handleStart = useCallback(() => {
    play();
    setQuizState('quiz');
  }, [play]);

  const handleAnswer = useCallback((answer: string) => {
    setAnswers((prev) => [...prev, answer]);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizState('loading');
    }
  }, [currentQuestion]);

  const handleLoadingComplete = useCallback(() => {
    setQuizState('result');
  }, []);

  return (
    <div className="min-h-screen">
      {/* Audio Control - visible during quiz */}
      {quizState === 'quiz' && !hasEnded && (
        <AudioControl isMuted={isMuted} onToggle={toggleMute} />
      )}

      {/* Quiz States */}
      {quizState === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {quizState === 'quiz' && (
        <QuizQuestionCard
          key={currentQuestion}
          question={quizQuestions[currentQuestion]}
          currentQuestion={currentQuestion + 1}
          totalQuestions={quizQuestions.length}
          onAnswer={handleAnswer}
        />
      )}

      {quizState === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {quizState === 'result' && (
        <ResultScreen />
      )}
    </div>
  );
};

export default Index;
