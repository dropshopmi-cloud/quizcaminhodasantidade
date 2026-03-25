import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Comecei a rezar todos os dias e senti uma paz enorme no meu coração. O Caminho da Santidade me ajudou a voltar para Deus.",
    author: "Maria",
    location: "SP"
  },
  {
    text: "Garantir o Caminho da Santidade mudou minha rotina espiritual. Hoje consigo rezar todos os dias com muito mais disciplina.",
    author: "João",
    location: "MG"
  },
  {
    text: "Eu sempre começava novenas e não terminava. Com o Caminho da Santidade tudo ficou organizado e fácil de acompanhar.",
    author: "Carla",
    location: "PR"
  },
  {
    text: "Sinto que minha fé ficou muito mais forte depois que comecei a usar o Caminho da Santidade no meu celular.",
    author: "Antônio",
    location: "BA"
  },
  {
    text: "Agora tenho minhas orações, novenas e devocionais sempre comigo. Isso transformou completamente minha vida espiritual.",
    author: "Juliana",
    location: "RJ"
  },
  {
    text: "É incrível ter tudo organizado em um só lugar. O Caminho da Santidade realmente me ajudou a criar constância na oração.",
    author: "Marcos",
    location: "RS"
  },
  {
    text: "Depois que comecei a usar o Caminho da Santidade sinto mais paz e confiança em Deus todos os dias.",
    author: "Patrícia",
    location: "GO"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);

  return (
    <div className="sacred-card mb-8">
      <h3 className="font-cinzel text-xl text-gold text-center mb-2 text-shadow-gold">
        Caminho da Santidade é confiável?
      </h3>
      <p className="text-center text-foreground/80 font-lora mb-6 leading-relaxed">
        <strong className="text-gold">SIM!</strong> 100% aqui estão algumas avaliações das pessoas que já adquiriram! 👇
      </p>

      <div className="relative">
        <div className="overflow-hidden rounded-xl">
          <div className="relative min-h-[200px] flex items-center">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`transition-all duration-700 w-full absolute inset-0 flex items-center justify-center p-6 bg-secondary/30 rounded-xl border border-gold/20 ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={20} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl font-lora italic text-foreground mb-4">
                    "{t.text}"
                  </p>
                  <p className="font-cinzel text-gold font-semibold">
                    — {t.author}, {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 rounded-full bg-secondary/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 rounded-full bg-secondary/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="flex justify-center gap-1.5 mt-4 mb-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-gold w-5' : 'bg-gold/30 w-1.5 hover:bg-gold/50'
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default TestimonialsCarousel;
