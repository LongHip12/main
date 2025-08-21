import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Star } from 'lucide-react';

const GameCard = ({ game }) => {
  return (
    <Card className="group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden">
      <div className="relative">
        <img 
          src={game.image} 
          alt={game.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-green-600 hover:bg-green-700 text-white">
            <CheckCircle className="w-3 h-3 mr-1" />
            {game.status}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {game.name}
          </h3>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm">4.9</span>
          </div>
        </div>
        
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">
          {game.description}
        </p>
        
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-purple-300">Features:</h4>
          <div className="flex flex-wrap gap-1">
            {game.features.slice(0, 3).map((feature, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-slate-700 text-slate-300 hover:bg-slate-600"
              >
                {feature}
              </Badge>
            ))}
            {game.features.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                +{game.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;