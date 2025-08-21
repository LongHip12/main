import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, AlertTriangle, Users, Clock } from 'lucide-react';

const SecurityNotice = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900">
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-to-br from-amber-900/20 to-red-900/20 border-amber-500/30 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-amber-400" />
            </div>
            <CardTitle className="text-3xl font-bold text-amber-300 mb-2">
              ⚠️ Important Security Notice
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <p className="text-slate-200 text-lg leading-relaxed mb-6 text-center">
              Use scripts responsibly and be aware of Roblox Terms of Service. We implement 
              advanced anti-detection measures, but no script is 100% undetectable. Always 
              use scripts at your own risk and consider the consequences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <Badge className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base">
                  <Clock className="w-4 h-4 mr-2" />
                  ✓ Regular Updates
                </Badge>
              </div>
              <div className="text-center">
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base">
                  <Shield className="w-4 h-4 mr-2" />
                  ✓ Anti-Detection
                </Badge>
              </div>
              <div className="text-center">
                <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-base">
                  <Users className="w-4 h-4 mr-2" />
                  ✓ 24/7 Support
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SecurityNotice;