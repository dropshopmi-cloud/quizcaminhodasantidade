import { Volume2, VolumeX } from 'lucide-react';

interface AudioControlProps {
  isMuted: boolean;
  onToggle: () => void;
}

const AudioControl = ({ isMuted, onToggle }: AudioControlProps) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-secondary/80 backdrop-blur-sm border border-gold/30 text-gold hover:bg-secondary transition-all duration-300 hover:scale-110"
      aria-label={isMuted ? "Ativar som" : "Silenciar"}
    >
      {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
    </button>
  );
};

export default AudioControl;
