import { useState, useRef, useEffect, useCallback } from 'react';

export const useAudio = (audioSrc: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = false;
    
    const handleEnded = () => {
      setHasEnded(true);
      setIsPlaying(false);
    };

    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const play = useCallback(() => {
    if (audioRef.current && !hasEnded) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Audio autoplay prevented:', error);
      });
    }
  }, [hasEnded]);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  return { isPlaying, isMuted, hasEnded, play, toggleMute };
};
