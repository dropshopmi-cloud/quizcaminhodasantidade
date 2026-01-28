import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/quizData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h3 className="font-cinzel text-xl text-gold text-center mb-6 text-shadow-gold">
        Perguntas Frequentes
      </h3>
      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="sacred-card !p-0 overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
            >
              <span className="font-medium text-foreground/90 pr-4">
                {item.question}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-48' : 'max-h-0'
              }`}
            >
              <p className="px-5 pb-4 text-foreground/70 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
