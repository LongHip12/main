import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Copy, Download, Eye, EyeOff } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ScriptViewer = ({ script }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script);
      toast({
        title: "Script Copied! 📋",
        description: "Lonely Hub script has been copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Could not copy script to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    const blob = new Blob([script], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lonely-hub-loader.lua';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Script Downloaded! 📥",
      description: "lonely-hub-loader.lua saved to your device",
    });
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lonely Hub Loader Script
            </CardTitle>
            <p className="text-slate-300 mt-2">
              Premium multi-game script loader for Roblox
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-slate-700 hover:bg-slate-600 text-white"
              >
                {isVisible ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                {isVisible ? 'Hide Script' : 'Show Script'}
              </Button>
              
              <Button
                onClick={handleCopy}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Script
              </Button>
              
              <Button
                onClick={handleDownload}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>

            {isVisible && (
              <div className="mt-6">
                <div className="bg-slate-900/80 rounded-lg p-4 border border-slate-600">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-400">lonely-hub-loader.lua</span>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <pre className="text-sm text-slate-200 overflow-x-auto max-h-96 font-mono leading-relaxed">
                    <code>{script}</code>
                  </pre>
                </div>
              </div>
            )}

            <div className="text-center space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">50K+</div>
                  <div className="text-sm text-slate-300">Active Users</div>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">100+</div>
                  <div className="text-sm text-slate-300">Supported Games</div>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-slate-300">Uptime</div>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-pink-400">1M+</div>
                  <div className="text-sm text-slate-300">Scripts Run</div>
                </div>
              </div>

              <div className="bg-slate-700/30 p-4 rounded-lg text-center">
                <p className="text-slate-300 text-sm">
                  <span className="text-yellow-400 font-semibold">⚠️ Disclaimer:</span> Use scripts responsibly and follow Roblox Terms of Service. 
                  Lonely Hub is not affiliated with Roblox Corporation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScriptViewer;