import { Check } from 'lucide-react';
import { productFeatures } from '@/data/quizData';

const ProductChecklist = () => {
  return (
    <div className="w-full">
      <h3 className="font-cinzel text-lg text-gold mb-4 text-center text-shadow-gold">
        O que você vai receber:
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {productFeatures.map((feature, index) => (
          <div 
            key={index}
            className="sacred-card !py-2 !px-4 flex items-center gap-2 hover:border-gold/50 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-5 h-5 rounded-full bg-cta-green flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-white" />
            </span>
            <span className="font-lora text-sm text-foreground/90">{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductChecklist;
