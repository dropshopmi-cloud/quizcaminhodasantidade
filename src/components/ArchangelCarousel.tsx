import { useState, useEffect } from 'react';
import arcanjoMiguel from '@/assets/arcanjo-miguel.png';
import arcanjoGabriel from '@/assets/arcanjo-gabriel.png';
import arcanjoRafael from '@/assets/arcanjo-rafael.png';

const images = [
  { src: arcanjoMiguel, alt: 'Arcanjo Miguel', name: 'São Miguel' },
  { src: arcanjoGabriel, alt: 'Arcanjo Gabriel', name: 'São Gabriel' },
  { src: arcanjoRafael, alt: 'Arcanjo Rafael', name: 'São Rafael' },
];

const ArchangelCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-gold/30 shadow-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain bg-gradient-to-b from-secondary/30 to-navy-deep"
            />
          </div>
        ))}
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent pointer-events-none" />
      </div>

      {/* Name Display */}
      <div className="text-center mt-4">
        <h3 className="font-cinzel text-xl text-gold text-shadow-gold">
          {images[currentIndex].name}
        </h3>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gold w-6' 
                : 'bg-gold/30 hover:bg-gold/50'
            }`}
            aria-label={`Ver ${images[index].name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ArchangelCarousel;
