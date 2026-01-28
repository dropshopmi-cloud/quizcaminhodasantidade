import { Check } from 'lucide-react';
import { productFeatures } from '@/data/quizData';

const ProductChecklist = () => {
  return (
    <div className="sacred-card">
      <h3 className="font-cinzel text-lg text-gold mb-4 text-center">
        O que você vai receber:
      </h3>
      <ul className="space-y-3">
        {productFeatures.map((feature, index) => (
          <li 
            key={index}
            className="flex items-center gap-3 text-foreground/90"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-6 h-6 rounded-full bg-cta-green flex items-center justify-center flex-shrink-0">
              <Check size={14} className="text-white" />
            </span>
            <span className="font-lora">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductChecklist;
