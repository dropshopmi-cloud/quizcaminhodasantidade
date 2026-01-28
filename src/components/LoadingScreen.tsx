import { useEffect, useState } from 'react';
import loadingSpiritual from '@/assets/loading-spiritual.png';

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
        {/* Spiritual Image */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl animate-pulse" />
          <div className="relative w-48 h-48 mx-auto">
            <img 
              src={loadingSpiritual} 
              alt="Análise espiritual"
              className="w-full h-full object-cover rounded-full border-4 border-gold/30 shadow-2xl"
            />
            <div 
              className="absolute inset-0 rounded-full border-4 border-gold border-t-transparent animate-spin"
              style={{ animationDuration: '2s' }}
            />
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
