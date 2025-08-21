import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameCard from './components/GameCard';
import ScriptViewer from './components/ScriptViewer';

import CompatibilitySection from './components/CompatibilitySection';
import SecurityNotice from './components/SecurityNotice';
import DeveloperSection from './components/DeveloperSection';
import { Github, Youtube, Facebook, MessageCircle } from 'lucide-react';
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
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="https://customer-assets.emergentagent.com/job_game-script-loader-1/artifacts/4rhrtofz_Picsart_25-05-02_12-33-27-196.png" 
              alt="Lonely Hub Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-white font-bold text-2xl">Lonely Hub</span>
          </div>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="#" 
              className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Discord"
            >
              <MessageCircle className="w-8 h-8" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-8 h-8" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
          
          <p className="text-slate-400 text-sm">
            © 2025 LongHip12. Premium Roblox Scripts. Use responsibly.
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