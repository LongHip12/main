import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameCard from './components/GameCard';
import ScriptViewer from './components/ScriptViewer';

import CompatibilitySection from './components/CompatibilitySection';
import SecurityNotice from './components/SecurityNotice';
import DeveloperSection from './components/DeveloperSection';
import { Toaster } from './components/ui/toaster';
import { mockData } from './data/mock';

const Home = () => {
  const scriptRef = useRef(null);

  const scrollToScript = () => {
    scriptRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header Section */}
      <Header onGetScript={scrollToScript} />
      
      {/* Compatibility Section */}
      <CompatibilitySection />
      
      {/* Games Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Supported Games
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Our premium scripts work flawlessly across the most popular Roblox games
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Script Section */}
      <section ref={scriptRef} id="script-section">
        <ScriptViewer script={mockData.loaderScript} />
      </section>

      {/* Security Notice */}
      <SecurityNotice />

      {/* Developer Section */}
      <DeveloperSection />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_game-script-loader-1/artifacts/4rhrtofz_Picsart_25-05-02_12-33-27-196.png" 
              alt="Lonely Hub Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-white font-bold text-xl">Lonely Hub</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2025 Lonely Hub. Premium Roblox Scripts. Use responsibly.
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;