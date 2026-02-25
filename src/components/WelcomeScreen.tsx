import caminhoDaSantidade from '@/assets/caminho-da-santidade.png';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6 animate-fade-in-up">
      <div className="max-w-lg w-full text-center">
        {/* Headline */}
        <h1 className="font-cinzel text-2xl md:text-3xl text-gold text-shadow-gold mb-2">
          Descubra Seu Momento Espiritual
        </h1>

        {/* Subheadline */}
        <p className="text-foreground/80 font-lora text-base md:text-lg mb-6">
          Responda algumas perguntas e descubra qual é o próximo passo da sua caminhada com Deus.
        </p>

        {/* Main Image */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl animate-pulse" />
          <img
            src={caminhoDaSantidade}
            alt="Caminho da Santidade"
            className="relative w-full max-w-xs mx-auto rounded-full shadow-2xl border-2 border-gold/30"
          />
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="btn-cta animate-pulse-glow font-cinzel text-lg md:text-xl"
        >
          Iniciar Meu Caminho com Deus
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
