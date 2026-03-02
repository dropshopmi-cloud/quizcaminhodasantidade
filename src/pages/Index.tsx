import { useState, useCallback } from 'react';
import { quizQuestions } from '@/data/quizData';
import { useAudio } from '@/hooks/useAudio';
import WelcomeScreen from '@/components/WelcomeScreen';
import NameCaptureScreen from '@/components/NameCaptureScreen';
import NameGreetingScreen from '@/components/NameGreetingScreen';
import IntroQuestionScreen, { IntroQuestion } from '@/components/IntroQuestionScreen';
import QuizQuestionCard from '@/components/QuizQuestionCard';
import PrayerScreen from '@/components/PrayerScreen';
import LoadingScreen from '@/components/LoadingScreen';
import ResultScreen from '@/components/ResultScreen';
import AudioControl from '@/components/AudioControl';

import introDiscernimento from '@/assets/intro-discernimento.png';
import introPedidos from '@/assets/intro-pedidos.png';
import introRenovacao from '@/assets/intro-renovacao.png';

type QuizState = 'welcome' | 'name-capture' | 'name-greeting' | 'intro-quiz' | 'quiz' | 'prayer' | 'loading' | 'result';

const introQuestions: IntroQuestion[] = [
  {
    question: "Em quais áreas você deseja colocar seu coração neste Devocional?",
    image: introDiscernimento,
    options: [
      "Minha vida financeira e profissional",
      "Harmonia nos relacionamentos familiares",
      "Proteção e força espiritual",
      "Minha caminhada de fé",
      "Outra intenção"
    ]
  },
  {
    question: "Como está o seu coração espiritual neste momento?",
    image: introPedidos,
    options: [
      "Sinto que preciso de uma purificação interior",
      "Busco uma renovação espiritual",
      "Estou em paz, mas desejo mais clareza e direção",
      "Sinto necessidade de proteção e paz espiritual",
      "Quero fortalecer minha fé e minha comunhão com Deus"
    ]
  },
  {
    question: "Você sente que há algo em sua vida que, apesar de seus esforços, ainda não se resolve?",
    image: introRenovacao,
    options: [
      "Sim… Sinto que tudo está travado, e nada parece dar certo.",
      "Sim… Algumas áreas da minha vida parecem estagnadas.",
      "Graças a Deus, sinto que tudo está fluindo bem no momento."
    ]
  }
];

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>('welcome');
  const [userName, setUserName] = useState('');
  const [introStep, setIntroStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const { isMuted, hasEnded, play, toggleMute } = useAudio('/audio/oracao-quiz.mp4');

  const handleStart = useCallback(() => {
    setQuizState('name-capture');
  }, []);

  const handleNameSubmit = useCallback((name: string) => {
    setUserName(name);
    setQuizState('name-greeting');
  }, []);

  const handleGreetingContinue = useCallback(() => {
    setIntroStep(0);
    setQuizState('intro-quiz');
    play();
  }, [play]);

  const handleIntroAnswer = useCallback((answer: string) => {
    setAnswers((prev) => [...prev, answer]);
    if (introStep < introQuestions.length - 1) {
      setIntroStep((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setQuizState('quiz');
    }
  }, [introStep]);

  const handleAnswer = useCallback((answer: string) => {
    setAnswers((prev) => [...prev, answer]);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizState('prayer');
    }
  }, [currentQuestion]);

  const handlePrayerContinue = useCallback(() => {
    setQuizState('loading');
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setQuizState('result');
  }, []);

  const showAudio = (quizState === 'intro-quiz' || quizState === 'quiz' || quizState === 'prayer') && !hasEnded;

  return (
    <div className="min-h-screen">
      {showAudio && (
        <AudioControl isMuted={isMuted} onToggle={toggleMute} />
      )}

      {quizState === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {quizState === 'name-capture' && <NameCaptureScreen onSubmit={handleNameSubmit} />}
      {quizState === 'name-greeting' && <NameGreetingScreen name={userName} onContinue={handleGreetingContinue} />}

      {quizState === 'intro-quiz' && (
        <IntroQuestionScreen
          key={`intro-${introStep}`}
          question={introQuestions[introStep]}
          currentStep={introStep + 1}
          totalSteps={introQuestions.length + quizQuestions.length}
          onAnswer={handleIntroAnswer}
        />
      )}

      {quizState === 'quiz' && (
        <QuizQuestionCard
          key={currentQuestion}
          question={quizQuestions[currentQuestion]}
          currentQuestion={introQuestions.length + currentQuestion + 1}
          totalQuestions={introQuestions.length + quizQuestions.length}
          onAnswer={handleAnswer}
        />
      )}

      {quizState === 'prayer' && <PrayerScreen name={userName} onContinue={handlePrayerContinue} />}
      {quizState === 'loading' && <LoadingScreen onComplete={handleLoadingComplete} />}
      {quizState === 'result' && <ResultScreen userName={userName} />}
    </div>
  );
};

export default Index;
