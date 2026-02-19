import { useState, useEffect } from 'react';
import comentario1 from '@/assets/comentario-1.jpeg';
import comentario2 from '@/assets/comentario-2.jpeg';
import comentario3 from '@/assets/comentario-3.jpeg';
import comentario4 from '@/assets/comentario-4.jpeg';
import comentario5 from '@/assets/comentario-5.png';
import comentario6 from '@/assets/comentario-6.png';
import comentario7 from '@/assets/comentario-7.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { src: comentario1, alt: 'Depoimento 1' },
  { src: comentario2, alt: 'Depoimento 2' },
  { src: comentario3, alt: 'Depoimento 3' },
  { src: comentario4, alt: 'Depoimento 4' },
  { src: comentario5, alt: 'Depoimento 5' },
  { src: comentario6, alt: 'Depoimento 6' },
  { src: comentario7, alt: 'Depoimento 7' },
];

interface TestimonialsCarouselProps {
  onCheckout: () => void;
}

const TestimonialsCarousel = ({ onCheckout }: TestimonialsCarouselProps) => {
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
      {/* Header */}
      <h3 className="font-cinzel text-xl text-gold text-center mb-2 text-shadow-gold">
        Trindade dos Arcanjos é confiável?
      </h3>
      <p className="text-center text-foreground/80 font-lora mb-6 leading-relaxed">
        <strong className="text-gold">SIM!</strong> 100% aqui estão algumas avaliações das pessoas que já adquiriram! 👇
      </p>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden rounded-xl">
          <div className="relative">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentIndex ? 'block' : 'hidden'
                }`}
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  className="w-full max-h-96 object-contain rounded-xl mx-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
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

      {/* Dots */}
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

      {/* CTA Button */}
      <button
        onClick={onCheckout}
        className="btn-cta animate-pulse-glow font-cinzel text-lg w-full"
      >
        Quero Meu Propósito com Deus
      </button>
    </div>
  );
};

export default TestimonialsCarousel;
