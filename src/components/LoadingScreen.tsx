import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 6000; // 6 seconds
    const interval = 50;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md w-full text-center animate-fade-in-up">
        {/* Animated Icon */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-4 border-gold/20" />
            <div 
              className="absolute inset-0 rounded-full border-4 border-gold border-t-transparent animate-spin"
              style={{ animationDuration: '2s' }}
            />
            <div className="absolute inset-4 rounded-full bg-secondary/50 flex items-center justify-center">
              <span className="text-4xl animate-pulse">✝️</span>
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <h2 className="text-xl md:text-2xl font-cinzel text-gold mb-4 text-shadow-gold">
          Analisando seu caminho espiritual…
        </h2>
        
        <p className="text-foreground/70 mb-8">
          Os Arcanjos estão preparando uma mensagem especial para você
        </p>

        {/* Progress Bar */}
        <div className="progress-bar mb-4">
          <div 
            className="progress-bar-fill animate-shimmer"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-gold text-sm font-medium">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
