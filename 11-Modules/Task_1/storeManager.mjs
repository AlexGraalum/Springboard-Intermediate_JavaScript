import { addItem, removeItem, listItems } from './inventory.mjs';

console.log("Adding...");
addItem("Bread");
addItem("Butter");
addItem("Sugar");
addItem("Milk");

console.log("\nAfter Adding:");
listItems();

console.log("Removing...");
removeItem("Sugar");
removeItem("Butter");
removeItem("Cake");

console.log("\nAfter Removing:");
listItems();