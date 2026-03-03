import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, MapPin, MessageCircle, Download, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

interface RegistrationProps {
  communityId: string;
  onBack: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ communityId, onBack }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    domicile: '',
    motivation: '',
  });
  const cardRef = useRef<HTMLDivElement>(null);

  const whatsappLinks: Record<string, string> = {
    'community-1': 'https://chat.whatsapp.com/J09csfCHJ8sFYNIpf5ygpM',
    'community-2': 'https://chat.whatsapp.com/LSkcEoFvn8LJIdW2uUhnzu?mode=gi_t',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <button
        onClick={onBack}
        className="mb-12 flex items-center gap-2 text-white/40 hover:text-white transition-colors font-orbitron text-[10px] tracking-[0.3em]"
      >
        <ArrowLeft size={14} /> KEMBALI KE HUB
      </button>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass p-10 md:p-16 rounded-[2.5rem] border border-white/5"
          >
            <div className="mb-12">
              <h2 className="font-orbitron text-3xl font-black mb-2 tracking-tighter">
                REGISTRASI EXPLORER
              </h2>
              <p className="font-orbitron text-[10px] tracking-[0.4em] text-white/30 uppercase">
                {communityId.replace('-', ' ')}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="block text-[10px] font-orbitron text-white/30 uppercase tracking-[0.3em]">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-5 pl-14 pr-6 focus:border-white/30 focus:outline-none transition-all font-light text-sm"
                    placeholder="Masukkan nama lengkap..."
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] font-orbitron text-white/30 uppercase tracking-[0.3em]">Domisili</label>
                <div className="relative">
                  <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input
                    required
                    type="text"
                    value={formData.domicile}
                    onChange={(e) => setFormData({ ...formData, domicile: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-5 pl-14 pr-6 focus:border-white/30 focus:outline-none transition-all font-light text-sm"
                    placeholder="Kota tempat tinggal..."
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] font-orbitron text-white/30 uppercase tracking-[0.3em]">Motivasi Gabung</label>
                <div className="relative">
                  <MessageCircle className="absolute left-5 top-6 text-white/20" size={18} />
                  <textarea
                    required
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-5 pl-14 pr-6 min-h-[140px] focus:border-white/30 focus:outline-none transition-all font-light text-sm resize-none"
                    placeholder="Apa yang membuat Anda tertarik dengan astronomi?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full neon-button py-6 rounded-2xl font-orbitron font-bold tracking-[0.4em] text-white text-[10px] mt-6"
              >
                GENERATE MEMBER PASS
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="id-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-orbitron text-4xl font-black mb-3 tracking-tighter">PENDAFTARAN BERHASIL</h2>
              <p className="text-white/40 font-light text-sm">Selamat! Anda kini bagian dari Explorers Astronomy Community.</p>
            </div>

            {/* Virtual ID Card - Monochrome Cinematic Style */}
            <div 
              ref={cardRef}
              className="relative w-full max-w-lg aspect-[1.6/1] rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.05)] border border-white/10"
            >
              <div className="absolute inset-0 bg-black" />
              
              {/* Cinematic Background Elements */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/[0.05] via-transparent to-transparent" />
              
              <div className="relative h-full p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center relative">
                      <div className="absolute inset-0 border border-white/20 rounded-full animate-spin-slow" />
                      <div className="w-6 h-6 bg-white rounded-full" />
                    </div>
                    <div>
                      <h3 className="eac-logo-text text-2xl">EAC</h3>
                      <p className="text-[8px] font-orbitron text-white/30 tracking-[0.4em]">EXPLORERS COMMUNITY</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] font-orbitron text-white/30 tracking-[0.4em] mb-1">SECTOR</p>
                    <p className="font-orbitron text-xs font-bold text-white tracking-widest">{communityId.includes('1') ? 'ALPHA' : 'BETA'}</p>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[8px] font-orbitron text-white/20 uppercase tracking-[0.4em] mb-2">Explorer Name</p>
                      <p className="font-orbitron text-3xl font-black text-white tracking-tighter truncate max-w-[300px]">{formData.name}</p>
                    </div>
                    <div className="flex gap-12">
                      <div>
                        <p className="text-[8px] font-orbitron text-white/20 uppercase tracking-[0.4em] mb-2">Domicile</p>
                        <p className="font-orbitron text-xs font-medium text-white/80 tracking-widest">{formData.domicile}</p>
                      </div>
                      <div>
                        <p className="text-[8px] font-orbitron text-white/20 uppercase tracking-[0.4em] mb-2">ID Status</p>
                        <p className="font-orbitron text-xs font-bold text-white tracking-widest">VERIFIED</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-24 h-24 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                      <path d="M10,10 H90 V90 H10 Z M20,20 V80 H80 V20 Z" />
                      <rect x="30" y="30" width="10" height="10" />
                      <rect x="50" y="30" width="20" height="10" />
                      <rect x="30" y="50" width="40" height="20" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-6 w-full max-w-lg">
              <button
                onClick={() => window.open(whatsappLinks[communityId], '_blank')}
                className="flex-1 bg-white text-black hover:bg-white/90 py-5 rounded-2xl font-orbitron font-bold text-[10px] tracking-[0.4em] transition-all flex items-center justify-center gap-3"
              >
                GABUNG GRUP <ArrowRight size={14} />
              </button>
              <button
                onClick={() => alert('Fitur download kartu akan segera hadir!')}
                className="px-8 bg-white/5 hover:bg-white/10 border border-white/10 py-5 rounded-2xl text-white transition-all flex items-center justify-center"
              >
                <Download size={20} strokeWidth={1.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
