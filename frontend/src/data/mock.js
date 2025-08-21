// Mock data for Roblox Scripts Website
export const mockData = {
  games: [
    {
      id: 1,
      name: "Doors",
      description: "Horror survival game with monsters and puzzles",
      image: "https://images.unsplash.com/photo-1656639969809-ebc544c96955?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxyb2Jsb3glMjBnYW1pbmd8ZW58MHx8fHwxNzU1Nzc2Mzg2fDA&ixlib=rb-4.1.0&q=85",
      status: "Active",
      features: ["Auto-avoid entities", "Speed boost", "ESP for items", "Safe room finder"]
    },
    {
      id: 2,
      name: "Blox Fruits",
      description: "Epic anime-style fighting and adventure game",
      image: "https://images.unsplash.com/photo-1599548291260-8a88e3d3b095?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxyb2Jsb3glMjBnYW1pbmd8ZW58MHx8fHwxNzU1Nzc2Mzg2fDA&ixlib=rb-4.1.0&q=85",
      status: "Active",
      features: ["Auto-farm", "Fruit finder", "Teleport to locations", "Boss auto-kill"]
    },
    {
      id: 3,
      name: "Grow a Garden",
      description: "Relaxing farming and gardening simulation",
      image: "https://images.unsplash.com/photo-1539606328118-80c679838702?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxyb2Jsb3glMjBnYW1pbmd8ZW58MHx8fHwxNzU1Nzc2Mzg2fDA&ixlib=rb-4.1.0&q=85",
      status: "Active",
      features: ["Auto-water plants", "Harvest collector", "Seed buyer", "Farm optimizer"]
    },
    {
      id: 4,
      name: "Arise Crossover",
      description: "Anime crossover fighting game with multiple universes",
      image: "https://images.unsplash.com/photo-1613255990799-f6141f60cdad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxnYW1lJTIwdGh1bWJuYWlsc3xlbnwwfHx8fDE3NTU3NzYzOTV8MA&ixlib=rb-4.1.0&q=85",
      status: "Active",
      features: ["Auto-combo", "Character unlocker", "Skill macro", "Tournament bot"]
    },
    {
      id: 5,
      name: "Dead Rails",
      description: "Zombie apocalypse survival on abandoned railways",
      image: "https://images.unsplash.com/photo-1698064534597-e039edaa0717?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxyb2Jsb3glMjBnYW1pbmd8ZW58MHx8fHwxNzU1Nzc2Mzg2fDA&ixlib=rb-4.1.0&q=85",
      status: "Active",
      features: ["Auto-aim", "Resource collector", "Safe zone finder", "Zombie tracker"]
    },
    {
      id: 6,
      name: "Meme Sea",
      description: "Hilarious pirate adventure with meme references",
      image: "https://images.pexels.com/photos/15290406/pexels-photo-15290406.jpeg",
      status: "Active",
      features: ["Auto-quest", "Treasure hunter", "Ship upgrader", "PvP assist"]
    },
    {
      id: 7,
      name: "Universal Scripts",
      description: "Works across multiple Roblox games",
      image: "https://images.unsplash.com/photo-1656639969809-ebc544c96955?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxyb2Jsb3glMjBnYW1pbmd8ZW58MHx8fHwxNzU1Nzc2Mzg2fDA&ixlib=rb-4.1.0&q=85",
      status: "Active",
      features: ["Speed hack", "Fly mode", "Noclip", "Infinite jump"]
    },
    {
      id: 8,
      name: "And Much More",
      description: "Over 100+ supported games and growing",
      image: "https://images.unsplash.com/photo-1599548291260-8a88e3d3b095?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxyb2Jsb3glMjBnYW1pbmd8ZW58MHx8fHwxNzU1Nzc2Mzg2fDA&ixlib=rb-4.1.0&q=85",
      status: "Coming Soon",
      features: ["Auto-updates", "Game detection", "Custom configs", "Community scripts"]
    }
  ],
  
  loaderScript: `-- Lonely Hub Loader Script
-- Premium Roblox Script Hub
-- Supports: Doors, Blox Fruits, Grow a Garden, Arise Crossover, Dead Rails, Meme Sea & More!

local LonelyHub = {}
LonelyHub.Version = "v2.1.0"
LonelyHub.Games = {
    [6839171747] = "Doors", 
    [2753915549] = "BloxFruits",
    [1234567890] = "GrowAGarden",
    [5678901234] = "AriseCrossover",
    [9876543210] = "DeadRails",
    [1357924680] = "MemeSea",
    [286090429] = "Arsenal",
    [606849621] = "Jailbreak",
    [920587237] = "AdoptMe"
}

-- Main loader function
function LonelyHub:Load()
    local gameId = game.PlaceId
    local gameName = self.Games[gameId]
    
    if gameName then
        print("🎮 Loading Lonely Hub for: " .. gameName)
        self:LoadGameScript(gameName)
    else
        print("🌍 Loading Universal Scripts...")
        self:LoadUniversalScript()
    end
end

-- Load game-specific script
function LonelyHub:LoadGameScript(gameName)
    local scriptUrl = "https://raw.githubusercontent.com/LonelyHub/Scripts/main/" .. gameName .. ".lua"
    
    local success, script = pcall(function()
        return game:HttpGet(scriptUrl)
    end)
    
    if success then
        loadstring(script)()
        print("✅ " .. gameName .. " script loaded successfully!")
    else
        print("❌ Failed to load script for " .. gameName)
    end
end

-- Load universal script for unsupported games
function LonelyHub:LoadUniversalScript()
    local universalUrl = "https://raw.githubusercontent.com/LonelyHub/Scripts/main/Universal.lua"
    
    local success, script = pcall(function()
        return game:HttpGet(universalUrl)
    end)
    
    if success then
        loadstring(script)()
        print("✅ Universal script loaded successfully!")
    else
        print("❌ Failed to load universal script")
    end
end

-- Show supported games
function LonelyHub:ShowSupportedGames()
    print("🎯 Lonely Hub - Supported Games:")
    for id, name in pairs(self.Games) do
        print("  • " .. name .. " (ID: " .. id .. ")")
    end
    print("  • Universal Scripts for other games")
end

-- Initialize and load
LonelyHub:Load()

-- GUI Creation (Optional)
if syn and syn.protect_gui then
    local ScreenGui = Instance.new("ScreenGui")
    ScreenGui.Name = "LonelyHub"
    syn.protect_gui(ScreenGui)
    ScreenGui.Parent = game.CoreGui
end

print("🚀 Lonely Hub initialized - Happy scripting!")`,

  stats: {
    totalUsers: "50K+",
    supportedGames: "100+",
    uptime: "99.9%",
    scriptsRun: "1M+"
  }
}