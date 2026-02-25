import { useState } from 'react';
import caminhoDaSantidade from '@/assets/caminho-da-santidade.png';

interface NameCaptureScreenProps {
  onSubmit: (name: string) => void;
}

const NameCaptureScreen = ({ onSubmit }: NameCaptureScreenProps) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 animate-fade-in-up">
      <div className="max-w-lg w-full text-center">
        {/* Image */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl animate-pulse" />
          <img
            src={caminhoDaSantidade}
            alt="Caminho da Santidade"
            className="relative w-40 h-40 mx-auto rounded-full object-cover border-2 border-gold/40 shadow-2xl"
          />
        </div>

        {/* Heading */}
        <h2 className="font-cinzel text-2xl md:text-3xl text-gold text-shadow-gold mb-4">
          Gostaria de deixar seu nome para que o incluamos em nosso Livro de Orações?
        </h2>

        {/* Subtext */}
        <p className="text-foreground/70 leading-relaxed mb-8 font-lora">
          Com grande alegria, levaremos seu nome ao altar em nossas preces diárias. Ao registrá-lo aqui, unimos sua intenção à nossa comunidade de fé, confiando tudo ao Sagrado Coração de Jesus e à intercessão dos Santos Arcanjos. 🙏
        </p>

        {/* Input */}
        <div className="sacred-card mb-6">
          <input
            type="text"
            placeholder="Digite seu nome aqui"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            maxLength={80}
            className="w-full bg-transparent border border-gold/30 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold/70 font-lora text-lg transition-colors"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={!name.trim()}
          className="btn-cta font-cinzel text-lg w-full max-w-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enviar →
        </button>
      </div>
    </div>
  );
};

export default NameCaptureScreen;
