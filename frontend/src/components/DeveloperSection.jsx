import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Palette, Zap, User } from 'lucide-react';

const DeveloperSection = () => {
  const developers = [
    {
      name: 'MeiMei',
      role: 'UI Designer & Script Function Expert',
      description: 'A person with extensive experience in UI design and creating functions for scripts.',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'LongHip12',
      role: 'Main Scripter & UI Designer',
      description: 'Primary scripter and main UI designer, specializing in creating scripts for various functions.',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'ItKuri',
      role: 'Functions Provider & Visual Designer',
      description: 'Provides functions to the owner for script development and creates logos and aesthetics.',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Meet Our Development Team
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Expert developers with years of experience creating premium Roblox scripts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {developers.map((dev, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${dev.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {dev.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white">{dev.name}</CardTitle>
                <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                  {dev.role}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center leading-relaxed">
                  {dev.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Owner/Lead Developer Section */}
        <Card className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 border-purple-500/30 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lead Developer & Founder
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-200 text-lg leading-relaxed mb-6">
              I am a person with <span className="font-bold text-white">extensive experience in the field of scripting</span> with 
              more than <span className="font-bold text-purple-300">2 years of writing scripts and debugging</span>. 
              I have learned many programming languages including:
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['Lua', 'Luau', 'Python', 'C#', 'C++', 'C', 'NodeJS'].map((lang, index) => (
                <Badge key={index} className="bg-slate-700 text-purple-300 border-purple-500/30 px-4 py-2 text-base">
                  {lang}
                </Badge>
              ))}
            </div>
            
            <p className="text-slate-300 text-lg">
              Passionate about creating high-quality, undetectable scripts that enhance the gaming experience 
              while maintaining the highest standards of code quality and user safety.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeveloperSection;