import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Zap, Globe, Info, ArrowRight } from 'lucide-react';

export const Calculator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'conversion' | 'physics'>('conversion');
  
  // Conversion State
  const [ly, setLy] = useState('');
  const [km, setKm] = useState('');

  // Physics State (Gravity)
  const [m1, setM1] = useState('');
  const [m2, setM2] = useState('');
  const [r, setR] = useState('');
  const [force, setForce] = useState<number | null>(null);

  const G = 6.67430e-11;

  const handleLyToKm = (val: string) => {
    setLy(val);
    if (!val) {
      setKm('');
      return;
    }
    const result = parseFloat(val) * 9.461e12;
    setKm(result.toExponential(4));
  };

  const calculateGravity = () => {
    const mass1 = parseFloat(m1);
    const mass2 = parseFloat(m2);
    const radius = parseFloat(r);
    
    if (mass1 && mass2 && radius) {
      const f = (G * mass1 * mass2) / Math.pow(radius, 2);
      setForce(f);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <button
        onClick={onBack}
        className="mb-12 flex items-center gap-2 text-white/40 hover:text-white transition-colors font-orbitron text-[10px] tracking-[0.3em]"
      >
        <ArrowLeft size={14} /> KEMBALI KE HUB
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-[2.5rem] overflow-hidden border border-white/5"
      >
        <div className="flex border-b border-white/5">
          <button
            onClick={() => setActiveTab('conversion')}
            className={`flex-1 py-8 font-orbitron text-[10px] tracking-[0.4em] transition-all ${activeTab === 'conversion' ? 'bg-white/[0.05] text-white' : 'text-white/30 hover:text-white/50'}`}
          >
            KONVERSI DATA
          </button>
          <button
            onClick={() => setActiveTab('physics')}
            className={`flex-1 py-8 font-orbitron text-[10px] tracking-[0.4em] transition-all ${activeTab === 'physics' ? 'bg-white/[0.05] text-white' : 'text-white/30 hover:text-white/50'}`}
          >
            RUMUS FISIKA
          </button>
        </div>

        <div className="p-10 md:p-16">
          {activeTab === 'conversion' ? (
            <div className="space-y-10">
              <div className="flex items-center gap-5 mb-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <Zap className="text-white" size={20} />
                </div>
                <h3 className="font-orbitron text-xl font-bold tracking-widest">LIGHT YEAR CONVERTER</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-3">
                  <label className="block text-[8px] font-orbitron text-white/30 uppercase tracking-[0.4em]">Light Years (ly)</label>
                  <input
                    type="number"
                    value={ly}
                    onChange={(e) => handleLyToKm(e.target.value)}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-6 px-8 focus:border-white/30 focus:outline-none font-orbitron text-2xl text-white"
                    placeholder="0.0"
                  />
                </div>
                <div className="hidden md:flex justify-center">
                  <ArrowRight className="text-white/20" size={24} />
                </div>
                <div className="space-y-3">
                  <label className="block text-[8px] font-orbitron text-white/30 uppercase tracking-[0.4em]">Kilometers (km)</label>
                  <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-6 px-8 text-white font-orbitron text-2xl overflow-hidden text-ellipsis min-h-[84px] flex items-center">
                    {km || '0.0'}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-5 items-start">
                <Info className="text-white/40 shrink-0" size={20} />
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  Satu tahun cahaya adalah jarak yang ditempuh cahaya dalam ruang hampa selama satu tahun Julian (365,25 hari). 
                  Nilai pastinya adalah 9.460.730.472.580,8 km.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="flex items-center gap-5 mb-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <Globe className="text-white" size={20} />
                </div>
                <h3 className="font-orbitron text-xl font-bold tracking-widest">GRAVITASI UNIVERSAL</h3>
              </div>

              <div className="flex justify-center py-10">
                <div className="font-orbitron text-2xl text-white/80 bg-white/[0.02] px-10 py-6 rounded-3xl border border-white/10 tracking-widest">
                  F = G <span className="mx-2">·</span> (m₁ <span className="mx-2">·</span> m₂) / r²
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <label className="block text-[8px] font-orbitron text-white/30 uppercase tracking-[0.4em]">Massa Benda 1 (kg)</label>
                  <input
                    type="number"
                    value={m1}
                    onChange={(e) => setM1(e.target.value)}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-5 px-6 focus:border-white/30 focus:outline-none text-white font-light"
                    placeholder="5.97e24"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[8px] font-orbitron text-white/30 uppercase tracking-[0.4em]">Massa Benda 2 (kg)</label>
                  <input
                    type="number"
                    value={m2}
                    onChange={(e) => setM2(e.target.value)}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-5 px-6 focus:border-white/30 focus:outline-none text-white font-light"
                    placeholder="7.34e22"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[8px] font-orbitron text-white/30 uppercase tracking-[0.4em]">Jarak Pusat (m)</label>
                  <input
                    type="number"
                    value={r}
                    onChange={(e) => setR(e.target.value)}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-5 px-6 focus:border-white/30 focus:outline-none text-white font-light"
                    placeholder="3.84e8"
                  />
                </div>
              </div>

              <button
                onClick={calculateGravity}
                className="w-full neon-button py-6 rounded-2xl font-orbitron font-bold tracking-[0.4em] text-white text-[10px]"
              >
                HITUNG GAYA (NEWTON)
              </button>

              {force !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 text-center"
                >
                  <p className="text-[8px] font-orbitron text-white/30 uppercase tracking-[0.4em] mb-4">Hasil Perhitungan Gaya</p>
                  <p className="font-orbitron text-4xl font-black text-white tracking-tighter">{force.toExponential(4)} N</p>
                </motion.div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white/[0.02] p-10 border-t border-white/5">
          <h4 className="font-orbitron text-[8px] font-bold text-white/30 mb-6 tracking-[0.4em] uppercase">KONSTANTA FISIKA</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex justify-between items-center p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[9px] text-white/40 font-orbitron tracking-widest">Kecepatan Cahaya (c)</span>
              <span className="text-xs text-white font-mono tracking-tighter">299,792,458 m/s</span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[9px] text-white/40 font-orbitron tracking-widest">Gravitasi (G)</span>
              <span className="text-xs text-white font-mono tracking-tighter">6.6743 × 10⁻¹¹</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

