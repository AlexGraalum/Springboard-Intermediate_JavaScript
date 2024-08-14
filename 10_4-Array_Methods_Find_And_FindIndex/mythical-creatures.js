const mythicalCreatures = [
	{ name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
	{ name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
	{ name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
	{ name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
	{ name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
];

const waterType = mythicalCreatures.find((creature) => creature.type == "Water");
console.log(`First Water Type: ${waterType.name}`);

const griffinIdx = mythicalCreatures.findIndex((creature) => creature.name == "Griffin");
console.log(`Griffin Index: ${griffinIdx}`);

const lastInForest = mythicalCreatures.find((creature) => creature.lastSeen == "Enchanted Forest");
console.log(`Last Seen In Enchanted Forest: ${lastInForest.name}`);