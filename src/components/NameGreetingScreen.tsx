interface NameGreetingScreenProps {
  name: string;
  onContinue: () => void;
}

const NameGreetingScreen = ({ name, onContinue }: NameGreetingScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 animate-fade-in-up">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mx-auto mb-8 text-4xl">
          ✨
        </div>

        {/* Personalized Greeting */}
        <h2 className="font-cinzel text-2xl md:text-3xl text-gold text-shadow-gold mb-6 leading-relaxed">
          {name} é uma bênção contar com sua presença! 🙏
        </h2>

        {/* Sub Text */}
        <div className="sacred-card mb-8">
          <p className="text-foreground/80 leading-relaxed font-lora">
            Seu nome já foi cuidadosamente incluído em nosso Livro de Orações. Ele será lembrado com carinho e fé em cada dia, diante do altar do Senhor.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onContinue}
          className="btn-cta font-cinzel text-lg w-full max-w-md"
        >
          CONTINUAR →
        </button>
      </div>
    </div>
  );
};

export default NameGreetingScreen;
