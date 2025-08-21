import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle } from 'lucide-react';

const CompatibilitySection = () => {
  const executors = [
    { name: 'Synapse X', compatibility: 95, color: 'from-purple-500 to-blue-500' },
    { name: 'KRNL', compatibility: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Oxygen U', compatibility: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Script-Ware', compatibility: 88, color: 'from-pink-500 to-red-500' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Executor Compatibility
          </h2>
          <p className="text-slate-300 text-lg">
            Our scripts work seamlessly across all major Roblox executors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {executors.map((executor, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {executor.name}
                </h3>
                
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-white font-semibold">
                    {executor.compatibility}% Compatible
                  </span>
                </div>
                
                <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${executor.color} transition-all duration-1000`}
                    style={{ width: `${executor.compatibility}%` }}
                  ></div>
                </div>
                
                <Badge className="w-full justify-center bg-green-600 hover:bg-green-700 text-white py-2">
                  ✓ Fully Supported
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;