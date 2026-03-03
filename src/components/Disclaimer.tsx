import React from 'react';
import { motion } from 'motion/react';
import { Info, ShieldCheck, Zap } from 'lucide-react';

interface DisclaimerProps {
  onAccept: () => void;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ onAccept }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="glass max-w-2xl w-full p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        <header className="mb-12 text-center">
          <h2 className="font-orbitron text-[10px] tracking-[0.6em] text-white/40 mb-4 uppercase">
            --- MENUJU UTAMA (Versi 2.0) ---
          </h2>
          <div className="relative inline-block">
            <h1 className="eac-logo-text text-5xl md:text-6xl mb-2">
              EAC PORTAL
            </h1>
            <div className="absolute -right-4 top-0 w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
          <p className="font-orbitron text-[10px] tracking-[0.3em] text-white/30 mt-2">EXPLORERS ASTRONOMY COMMUNITY</p>
        </header>

        <div className="space-y-8 mb-12 text-white/70 leading-relaxed font-light">
          <p className="text-center italic text-sm">
            "Satu langkah kecil untuk manusia, satu lompatan besar bagi pengetahuan."
          </p>

          <div className="grid gap-6">
            <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
              <div className="p-3 rounded-xl bg-white/5 text-white">
                <Zap size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-orbitron text-xs font-bold text-white mb-1 tracking-widest">NAVIGASI PRESISI</h3>
                <p className="text-xs text-white/50">Akses instan ke seluruh modul observasi melalui dashboard terpusat.</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
              <div className="p-3 rounded-xl bg-white/5 text-white">
                <ShieldCheck size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-orbitron text-xs font-bold text-white mb-1 tracking-widest">PROTOKOL PRIVASI</h3>
                <p className="text-xs text-white/50">Data pendaftaran Anda dilindungi oleh enkripsi tingkat lanjut.</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
              <div className="p-3 rounded-xl bg-white/5 text-white">
                <Info size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-orbitron text-xs font-bold text-white mb-1 tracking-widest">MODUL INTERAKTIF</h3>
                <p className="text-xs text-white/50">Alat hitung astrofisika dan feed berita galaksi yang diperbarui secara real-time.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <button
            onClick={onAccept}
            className="neon-button px-12 py-5 rounded-full font-orbitron text-[10px] font-bold tracking-[0.4em] text-white"
          >
            INISIASI PORTAL
          </button>
          
          <p className="font-orbitron text-[8px] tracking-[0.4em] text-white/20 uppercase">
            Dibuat oleh Xzam
          </p>
        </div>
      </motion.div>
    </div>
  );
};
