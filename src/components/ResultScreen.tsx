import ArchangelCarousel from './ArchangelCarousel';
import ProductChecklist from './ProductChecklist';
import FAQ from './FAQ';

const CHECKOUT_URL = 'https://pay.hotmart.com/G104041523C?checkoutMode=10';

const ResultScreen = () => {
  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-lg w-full animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-cta-green/20 text-cta-green border border-cta-green/30 mb-4">
            ✨ Análise Completa
          </span>
          <h1 className="font-cinzel text-2xl md:text-3xl text-gold text-shadow-gold mb-4">
            Seu Caminho Espiritual Aguarda
          </h1>
        </div>

        {/* Carousel */}
        <div className="mb-8">
          <ArchangelCarousel />
        </div>

        {/* Persuasive Text */}
        <div className="sacred-card mb-8 text-center">
          <p className="text-foreground/90 leading-relaxed mb-4">
            Os Arcanjos <span className="text-gold font-semibold">Miguel, Gabriel e Rafael</span> são mensageiros celestiais que Deus designou para nos guiar em nossa jornada espiritual.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Sua busca por um propósito mais profundo com Deus mostra que você está pronto para uma <span className="text-gold">transformação espiritual verdadeira</span>.
          </p>
          <p className="text-foreground/90 leading-relaxed font-medium">
            Com a <span className="text-gold">Trindade dos Arcanjos</span>, você terá acesso a orações poderosas, novenas sagradas e meditações que irão fortalecer sua fé e conectá-lo mais intimamente com o Divino.
          </p>
        </div>

        {/* Product Checklist */}
        <div className="mb-8">
          <ProductChecklist />
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleCheckout}
            className="btn-cta animate-pulse-glow font-cinzel text-lg md:text-xl w-full max-w-md"
          >
            Quero Meu Propósito com Deus
          </button>
          <p className="text-foreground/50 text-sm mt-3">
            🔒 Compra 100% segura • Acesso imediato
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <FAQ />
        </div>

        {/* Final CTA */}
        <div className="text-center pb-8">
          <button
            onClick={handleCheckout}
            className="btn-cta animate-pulse-glow font-cinzel text-lg w-full max-w-md"
          >
            Quero Meu Propósito com Deus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
