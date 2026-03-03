import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AUTO_PLAY_DELAY = 5000;   // Start playing after 5 seconds on page
const AUTO_STOP_AFTER = 15000;  // Stop after 15 seconds of playing

const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const stopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-play after 5 seconds on page
  useEffect(() => {
    const autoPlayTimer = setTimeout(() => {
      if (audioRef.current && !hasAutoPlayed) {
        setIsMuted(false);
        setHasAutoPlayed(true);
      }
    }, AUTO_PLAY_DELAY);

    return () => clearTimeout(autoPlayTimer);
  }, [hasAutoPlayed]);

  // Auto-stop after 15 seconds of playing
  useEffect(() => {
    if (!isMuted && hasAutoPlayed) {
      // Clear any existing stop timer
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current);

      stopTimerRef.current = setTimeout(() => {
        setIsMuted(true);
      }, AUTO_STOP_AFTER);
    }

    return () => {
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
    };
  }, [isMuted, hasAutoPlayed]);

  // Handle audio play/pause based on mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
    localStorage.setItem('isMuted', String(isMuted));
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // If user manually toggles, clear the auto-stop timer
    if (stopTimerRef.current) {
      clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <audio
        ref={audioRef}
        src="/meditation-music.mp3"
        loop
        preload="metadata"
      />
      <motion.button
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-xl border border-border/50 shadow-md dark:shadow-[0_10px_30px_-10px_rgba(var(--primary),0.3)] transition-all duration-500 overflow-hidden ${
          isMuted
            ? "bg-card text-muted-foreground hover:text-foreground hover:scale-110 active:scale-95"
            : "bg-primary border-primary text-white shadow-sm dark:shadow-primary/40 dark:animate-pulse hover:scale-110 active:scale-95"
        }`}
        aria-label={isMuted ? "Unmute meditation music" : "Mute meditation music"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <VolumeX className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="unmuted"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Volume2 className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      {!isMuted && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-12 right-0 bg-primary/90 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap font-medium tracking-wider uppercase"
        >
          Meditation Mode
        </motion.div>
      )}
    </div>
  );
};

export default AudioPlayer;
