import React from 'react';
import { motion } from 'motion/react';
import { Users, MessageSquare, Globe, Calculator, ArrowRight } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const menuItems = [
    {
      id: 'community-1',
      title: 'SEKTOR ALPHA',
      desc: 'Pendaftaran Anggota Baru EAC - Sektor Alpha',
      icon: <Users className="w-6 h-6" />,
      tag: 'REGISTRATION',
    },
    {
      id: 'community-2',
      title: 'SEKTOR BETA',
      desc: 'Pendaftaran Anggota Baru EAC - Sektor Beta',
      icon: <Users className="w-6 h-6" />,
      tag: 'REGISTRATION',
    },
    {
      id: 'channel',
      title: 'SALURAN EAC',
      desc: 'Update berita astronomi via WhatsApp Channel',
      icon: <MessageSquare className="w-6 h-6" />,
      tag: 'EXTERNAL',
      external: 'https://chat.whatsapp.com/J09csfCHJ8sFYNIpf5ygpM'
    },
    {
      id: 'articles',
      title: 'WARTA ANTARIKSA',
      desc: 'Dashboard artikel & feed berita luar angkasa',
      icon: <Globe className="w-6 h-6" />,
      tag: 'ARCHIVE',
    },
    {
      id: 'calculator',
      title: 'ASTRO CALC',
      desc: 'Alat hitung konversi & rumus fisika astronomi',
      icon: <Calculator className="w-6 h-6" />,
      tag: 'UTILITY',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <div className="inline-block relative mb-4">
          <h1 className="eac-logo-text text-6xl md:text-8xl font-black tracking-tighter">
            THE HUB
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <p className="text-white/30 font-orbitron text-[10px] tracking-[0.8em] uppercase mt-4">
          Pusat Kendali Navigasi Antariksa
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => item.external ? window.open(item.external, '_blank') : onNavigate(item.id)}
            className="group glass p-10 rounded-[2rem] cursor-pointer hover:bg-white/[0.08] transition-all duration-500 relative overflow-hidden border border-white/5 hover:border-white/20"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 rounded-2xl bg-white/5 text-white group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  {item.icon}
                </div>
                <span className="font-orbitron text-[8px] tracking-[0.3em] text-white/30 border border-white/10 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              
              <h3 className="font-orbitron text-xl font-bold mb-3 tracking-widest group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed mb-8 font-light">
                {item.desc}
              </p>
              
              <div className="flex items-center gap-3 text-[9px] font-orbitron font-bold text-white/60 group-hover:text-white transition-all tracking-[0.2em]">
                BUKA PORTAL <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.05] transition-all" />
          </motion.div>
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-24 text-center"
      >
        <p className="font-orbitron text-[9px] tracking-[0.5em] text-white/20 uppercase">
          EAC Astronomy Portal &copy; 2026 <span className="mx-4">|</span> Dibuat oleh Xzam
        </p>
      </motion.footer>
    </div>
  );
};
