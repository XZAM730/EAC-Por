import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Starfield } from './components/Starfield';
import { Loader } from './components/Loader';
import { Disclaimer } from './components/Disclaimer';
import { Dashboard } from './components/Dashboard';
import { Registration } from './components/Registration';
import { Calculator } from './components/Calculator';
import { Articles } from './components/Articles';

type Screen = 'disclaimer' | 'hub' | 'community-1' | 'community-2' | 'articles' | 'calculator';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('disclaimer');
  const [isLoading, setIsLoading] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState("Menghubungkan ke Sistem...");

  useEffect(() => {
    const hasAccepted = localStorage.getItem('eac_disclaimer_accepted');
    if (hasAccepted) {
      setCurrentScreen('hub');
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('eac_disclaimer_accepted', 'true');
    transitionTo('hub', "Membuka Portal Utama...");
  };

  const transitionTo = (screen: Screen, status?: string) => {
    setIsLoading(true);
    setLoaderStatus(status || "Menghubungkan ke Sistem...");
    
    // Simulate loading time for premium feel
    setTimeout(() => {
      setCurrentScreen(screen);
      setIsLoading(false);
    }, 2000);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'disclaimer':
        return <Disclaimer onAccept={handleAcceptDisclaimer} />;
      case 'hub':
        return <Dashboard onNavigate={(id) => transitionTo(id as Screen, `Membuka ${id.replace('-', ' ')}...`)} />;
      case 'community-1':
      case 'community-2':
        return <Registration communityId={currentScreen} onBack={() => transitionTo('hub')} />;
      case 'calculator':
        return <Calculator onBack={() => transitionTo('hub')} />;
      case 'articles':
        return <Articles onBack={() => transitionTo('hub')} />;
      default:
        return <Dashboard onNavigate={(id) => transitionTo(id as Screen)} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <Starfield />
      
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" status={loaderStatus} />}
      </AnimatePresence>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Ambient Sound (Optional - Visual indicator only as per guidelines) */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border border-white/10">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          <span className="font-orbitron text-[10px] tracking-widest text-white/40 uppercase">System Active</span>
        </div>
      </div>
    </div>
  );
}
