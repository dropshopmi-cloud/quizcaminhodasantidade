import { useEffect } from 'react';
import ProductChecklist from './ProductChecklist';
import FAQ from './FAQ';
import TestimonialsCarousel from './TestimonialsCarousel';
import garantia7 from '@/assets/garantia-7-dias.png';
import saasImage from '@/assets/saas-mockup.png';
import { Check } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.hotmart.com/G104041523C?checkoutMode=10';

const productBullets = [
  { title: "Orações poderosas", desc: "que fortalecerão sua fé e aumentarão sua confiança em Deus." },
  { title: "Novenas sagradas", desc: "para intercessão e proteção espiritual." },
  { title: "Rosário meditado", desc: "com reflexões profundas para aprofundar sua devoção." },
  { title: "Meditações cristãs", desc: "e Lectio Divina para silenciar a mente e ouvir Deus." },
  { title: "Leituras espirituais", desc: "selecionadas para iluminar sua caminhada e trazer sabedoria." },
  { title: "Devocional diário", desc: "para criar uma rotina de oração e crescimento espiritual." },
  { title: "Central Mariana", desc: "com devoções, orações e consagrações a Nossa Senhora." },
];

const benefits = [
  {
    title: "Conexão Espiritual",
    items: [
      "Aprofundar sua relação com Deus e com o divino.",
      "Sentir maior propósito e clareza sobre o sentido da vida."
    ]
  },
  {
    title: "Paz Interior",
    items: [
      "Desenvolver uma mente mais calma, especialmente ao começar o dia com reflexão e oração.",
      "Aprender a lidar melhor com os desafios e encontrar consolo em tempos difíceis."
    ]
  },
  {
    title: "Autoconhecimento",
    items: [
      "Refletir sobre seus valores, ações e áreas que precisam de crescimento.",
      "Descobrir forças internas e formas de melhorar relacionamentos."
    ]
  },
  {
    title: "Disciplina e Consistência",
    items: [
      "Criar uma rotina diária que alimenta a mente e o espírito.",
      "Desenvolver hábitos saudáveis que podem transbordar para outras áreas."
    ]
  },
  {
    title: "Gratidão e Positividade",
    items: [
      "Focar em bênçãos e pontos positivos da vida, mesmo em dias desafiadores.",
      "Reestruturar sua perspectiva para viver com mais esperança."
    ]
  }
];

interface ResultScreenProps {
  userName?: string;
}

const CtaBlock = ({ onCheckout }: { onCheckout: () => void }) => (
  <div className="text-center mb-10">
    <button
      onClick={onCheckout}
      className="btn-cta animate-pulse-glow font-cinzel text-lg md:text-xl w-full max-w-md"
    >
      Quero Iniciar Meu Caminho com Deus
    </button>
    <div className="mt-3">
      <p className="text-foreground/50 text-sm line-through">De R$97</p>
      <p className="text-gold font-cinzel text-xl font-bold">por apenas R$47,00</p>
    </div>
    <p className="text-foreground/50 text-sm mt-2">
      🔒 Compra segura • Acesso imediato • Garantia de 7 dias
    </p>
  </div>
);

const ResultScreen = ({ userName }: ResultScreenProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

  const handleCheckout = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    window.location.href = CHECKOUT_URL;
  };

  const displayName = userName || 'Amado(a)';

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="max-w-lg w-full animate-fade-in-up">

        {/* Header — Diagnóstico Espiritual */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-cta-green/20 text-cta-green border border-cta-green/30 mb-4">
            ✨ Análise Completa
          </span>
          <h1 className="font-cinzel text-2xl md:text-3xl text-gold text-shadow-gold mb-4">
            Seu Diagnóstico Espiritual
          </h1>
        </div>

        {/* Diagnóstico personalizado */}
        <div className="sacred-card mb-8">
          <p className="text-foreground/90 font-lora leading-relaxed mb-4">
            <span className="text-gold font-semibold">{displayName}</span>, suas respostas mostram que você deseja fortalecer sua fé, ter mais constância na oração e se aproximar mais de Deus.
          </p>
          <p className="text-foreground/80 font-lora leading-relaxed mb-4">
            O <span className="text-gold font-semibold">Caminho da Santidade</span> foi criado exatamente para pessoas que querem organizar sua vida espiritual, rezar com mais frequência e sentir mais paz no dia a dia.
          </p>
          <p className="text-foreground/80 font-lora leading-relaxed italic mb-4">
            Se você continuar como está, sua vida espiritual continuará sem constância. Mas com um caminho guiado, você pode rezar todos os dias, fazer novenas completas e sentir mais paz na sua vida.
          </p>
        </div>

        {/* CTA 1 — após diagnóstico */}
        <CtaBlock onCheckout={handleCheckout} />

        {/* Mockup do Produto */}
        <div className="sacred-card mb-8 text-center">
          <h2 className="font-cinzel text-xl md:text-2xl text-gold text-shadow-gold mb-2">
            Transforme Sua Vida Espiritual
          </h2>
          <p className="font-lora text-foreground/80 leading-relaxed mb-4">
            O <span className="text-gold font-semibold">Caminho da Santidade</span> é um guia devocional completo com{' '}
            <strong>Orações, Meditações, Novenas e Reflexões Diárias</strong>{' '}
            para crescer na fé e fortalecer sua comunhão com Deus.
          </p>
          <img
            src={saasImage}
            alt="Caminho da Santidade - disponível em todos os dispositivos"
            className="w-full max-w-xs mx-auto object-contain mb-4"
          />
          <p className="text-foreground/50 text-sm line-through mb-1">DE R$97,00</p>
          <p className="text-foreground/70 font-cinzel text-sm uppercase tracking-wide mb-1">POR APENAS</p>
          <p className="text-gold font-cinzel text-4xl font-bold text-shadow-gold">R$47,00</p>
        </div>

        {/* O que você vai encontrar */}
        <div className="sacred-card mb-8">
          <h2 className="font-cinzel text-xl md:text-2xl text-gold text-shadow-gold text-center mb-6 uppercase">
            O que você vai encontrar no Caminho da Santidade
          </h2>
          <div className="space-y-4">
            {productBullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cta-green flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-white" />
                </span>
                <p className="text-foreground/90 font-lora leading-relaxed">
                  <span className="text-gold font-semibold">{bullet.title}</span>{' '}
                  {bullet.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* O que você vai receber */}
        <div className="mb-8">
          <ProductChecklist />
        </div>

        {/* Benefícios */}
        <div className="sacred-card mb-8">
          <h3 className="font-cinzel text-lg text-gold text-center mb-6 text-shadow-gold">
            O que o Caminho da Santidade vai despertar em você:
          </h3>
          <div className="space-y-5">
            {benefits.map((benefit, i) => (
              <div key={i}>
                <h4 className="font-cinzel text-base text-gold mb-2">{benefit.title}</h4>
                <ul className="space-y-1">
                  {benefit.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-foreground/80 font-lora text-sm">
                      <span className="text-cta-green mt-1 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA 2 — após benefícios */}
        <CtaBlock onCheckout={handleCheckout} />

        {/* Depoimentos */}
        <TestimonialsCarousel onCheckout={handleCheckout} />

        {/* CTA 3 — após depoimentos */}
        <CtaBlock onCheckout={handleCheckout} />

        {/* Garantia */}
        <div className="sacred-card mb-8 text-center">
          <h3 className="font-cinzel text-xl text-gold mb-3 text-shadow-gold">
            Tem Garantia?
          </h3>
          <p className="text-foreground/80 font-lora leading-relaxed mb-6">
            <strong>SIM!</strong> Estamos tão confiantes que o Caminho da Santidade te ajudará que garantimos um{' '}
            <strong className="text-gold">reembolso total no prazo de 7 dias</strong> após a compra.
          </p>
          <img
            src={garantia7}
            alt="Garantia 7 dias"
            className="w-56 h-56 mx-auto object-contain mb-4"
          />
        </div>

        {/* Bloco espiritual — Arcanjos + Nossa Senhora */}
        <div className="sacred-card mb-8 text-center">
          <p className="text-foreground/90 leading-relaxed mb-4 font-lora">
            Os Arcanjos <span className="text-gold font-semibold">Miguel, Gabriel e Rafael</span> são mensageiros celestiais que Deus designou para nos guiar em nossa jornada espiritual. Juntos aos Arcanjos, <span className="text-gold font-semibold">Nossa Senhora</span> intercede por nós com todo o seu amor materno, cobrindo-nos com seu manto de proteção e graça.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4 font-lora">
            Sua busca por um propósito mais profundo com Deus mostra que você está pronto para uma <span className="text-gold">transformação espiritual verdadeira</span>.
          </p>
          <p className="text-foreground/90 leading-relaxed font-medium font-lora">
            Com o <span className="text-gold">Caminho da Santidade</span>, você terá acesso a orações poderosas, novenas sagradas e meditações que irão fortalecer sua fé e conectá-lo mais intimamente com o Divino.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <FAQ />
        </div>

        {/* CTA 4 — após FAQ (final) */}
        <div className="text-center pb-8">
          <button
            onClick={handleCheckout}
            className="btn-cta animate-pulse-glow font-cinzel text-lg w-full max-w-md"
          >
            Quero Iniciar Meu Caminho com Deus
          </button>
          <div className="mt-4">
            <p className="text-foreground/50 text-sm line-through">De R$97</p>
            <p className="text-gold font-cinzel text-2xl font-bold">por apenas R$47,00</p>
          </div>
          <p className="text-foreground/50 text-sm mt-3">
            🔒 Compra segura • Acesso imediato • Garantia de 7 dias
          </p>
        </div>

      </div>
    </div>
  );
};

export default ResultScreen;
