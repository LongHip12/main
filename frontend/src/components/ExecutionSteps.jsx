import React from 'react';
import { Card, CardContent } from './ui/card';
import { Zap } from 'lucide-react';

const ExecutionSteps = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900">
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-to-r from-purple-800/80 to-pink-800/80 border-purple-500/30 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500 rounded-full p-3 mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-2xl font-bold">
                3
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Execute & Enjoy</h2>
            <p className="text-purple-100 text-lg max-w-2xl mx-auto">
              Paste and execute the script to access all features
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExecutionSteps;