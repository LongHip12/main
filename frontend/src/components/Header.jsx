import React from 'react';
import { Button } from './ui/button';
import { Code, Shield, Zap } from 'lucide-react';

const Header = ({ onGetScript }) => {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url('data:image/svg+xml;charset=utf-8,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Logo */}
        <div className="absolute top-6 left-6">
          <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img 
              src="https://customer-assets.emergentagent.com/job_game-script-loader-1/artifacts/4rhrtofz_Picsart_25-05-02_12-33-27-196.png" 
              alt="Lonely Hub Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-white">Lonely Hub</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center pt-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lonely Hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            The ultimate Roblox script hub supporting <span className="font-semibold text-white">Doors</span>, 
            <span className="font-semibold text-white"> Blox Fruits</span>, 
            <span className="font-semibold text-white"> Grow a Garden</span> and many more games!
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-purple-200">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Undetectable</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Code className="w-5 h-5 text-blue-400" />
              <span>Premium Scripts</span>
            </div>
          </div>

          {/* Get Script Button */}
          <Button 
            onClick={onGetScript}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25"
          >
            Get Script
          </Button>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </header>
  );
};

export default Header;