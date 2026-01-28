import trindadeArcanjos from '@/assets/trindade-arcanjos.png';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 animate-fade-in-up">
      <div className="max-w-lg w-full text-center">
        {/* Headline */}
        <h1 className="text-sm font-medium tracking-widest uppercase mb-2 text-foreground/80">
          Quiz Trindade dos Arcanjos
        </h1>
        
        {/* Subheadline */}
        <p className="text-gold text-xl md:text-2xl font-cinzel mb-8 text-shadow-gold">
          Descubra seu propósito espiritual com os Arcanjos
        </p>

        {/* Main Image */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl animate-pulse" />
          <img 
            src={trindadeArcanjos} 
            alt="Trindade dos Arcanjos - São Miguel, São Gabriel e São Rafael"
            className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border-2 border-gold/30"
          />
        </div>

        {/* Persuasive Text */}
        <div className="sacred-card mb-8 text-left">
          <p className="text-foreground/90 leading-relaxed mb-4">
            <span className="text-gold font-semibold">Você sente um chamado espiritual?</span> Um desejo profundo de se conectar mais intimamente com Deus e descobrir seu verdadeiro propósito?
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Os três grandes Arcanjos — <span className="text-gold">São Miguel</span>, <span className="text-gold">São Gabriel</span> e <span className="text-gold">São Rafael</span> — são poderosos intercessores que Deus nos deu para nos guiar, proteger e curar.
          </p>
          <p className="text-foreground/90 leading-relaxed font-medium">
            Responda este quiz e descubra como fortalecer sua jornada espiritual com a intercessão da Trindade dos Arcanjos.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="btn-cta animate-pulse-glow font-cinzel text-lg md:text-xl"
        >
          Iniciar Meu Propósito com Deus
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
