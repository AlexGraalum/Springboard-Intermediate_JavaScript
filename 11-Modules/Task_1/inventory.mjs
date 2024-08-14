const inv = [];

export function addItem(itemName) {
    inv.push(itemName);
}

export function removeItem(itemName) {
    for (let i = 0; i < inv.length; i++) {
        if (inv[i] == itemName) {
            inv.splice(i, 1);
            i--;
        }
    }
}

export function listItems() {
    for (var item of inv)
        console.log(item);
}