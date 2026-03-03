import React from 'react';
import { motion } from 'motion/react';

export const Loader: React.FC<{ status?: string }> = ({ status = "Menghubungkan ke Sistem..." }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center justify-center">
        {/* Cinematic EAC Logo with Black Hole Effect */}
        <div className="relative flex items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="eac-logo-text text-9xl"
          >
            EA
          </motion.span>
          
          <div className="relative flex items-center justify-center">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="eac-logo-text text-9xl"
            >
              C
            </motion.span>
            
            {/* Black Hole in the 'C' */}
            <div className="absolute left-[15%] top-[45%] w-16 h-16 pointer-events-none">
              {/* Event Horizon */}
              <div className="absolute inset-0 bg-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] z-10" />
              
              {/* Accretion Disk */}
              <div className="absolute inset-[-100%] border-[2px] border-[#f2b05e] rounded-full opacity-60 blur-[1px] black-hole-disk" 
                   style={{ transform: 'rotate(70deg) scaleY(0.2)' }} />
              <div className="absolute inset-[-120%] border-[4px] border-[#f2b05e] rounded-full opacity-30 blur-[4px] black-hole-disk" 
                   style={{ transform: 'rotate(70deg) scaleY(0.2)', animationDelay: '-2s' }} />
            </div>
          </div>
        </div>

        {/* Light flare */}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 font-orbitron text-[10px] tracking-[0.6em] text-white/40 uppercase"
      >
        {status}
      </motion.p>
    </motion.div>
  );
};
