import { useState } from 'react';

interface PrayerScreenProps {
  name: string;
  onContinue: () => void;
}

const PrayerScreen = ({ name, onContinue }: PrayerScreenProps) => {
  const [prayer, setPrayer] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 animate-fade-in-up">
      <div className="max-w-lg w-full text-center">
        {/* Heading */}
        <h2 className="font-cinzel text-2xl md:text-3xl text-gold text-shadow-gold mb-4">
          Deus quer te abençoar hoje! ✨ 🙏
        </h2>

        {/* Personalized Sub-heading */}
        <p className="font-cinzel text-lg text-gold/80 mb-6">
          {name}, se você pudesse ver seu maior desejo realizado, o que pediria?
        </p>

        {/* Body text */}
        <div className="sacred-card mb-6 text-left">
          <p className="text-foreground/80 leading-relaxed mb-4 font-lora">
            Talvez seja uma cura, ou a restauração da sua família, a libertação de um vício, a prosperidade financeira, o reencontro com o amor verdadeiro ou, simplesmente, a paz no coração...
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4 font-lora">
            Declare com fé seu pedido abaixo. Os Santos Arcanjos, cheios de graça e fonte de bênçãos, levarão sua súplica até o coração de Jesus. Eles intercederão poderosamente por você! ❤️
          </p>
          <p className="text-foreground/90 leading-relaxed font-semibold font-lora">
            Acredite: nada é impossível para Deus. Com este Devocional, Ele agirá com amor e poder em sua vida. 🙌
          </p>
        </div>

        {/* Prayer Textarea */}
        <div className="mb-6">
          <textarea
            placeholder="Digite aqui sua prece..."
            value={prayer}
            onChange={(e) => setPrayer(e.target.value)}
            maxLength={1000}
            rows={5}
            className="w-full bg-transparent border border-gold/30 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold/70 font-lora resize-none transition-colors"
          />
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="btn-cta font-cinzel text-lg w-full max-w-md"
        >
          Continuar →
        </button>
      </div>
    </div>
  );
};

export default PrayerScreen;
