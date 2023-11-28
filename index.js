let cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
     cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}

function prependCat(name) {
    const newCats = [...cats];
    newCats.unshift(name);
    return newCats;
}

function removeLastCat() {
    const newCats = [...cats];
    newCats.pop();
    return newCats;
}

function removeFirstCat() {
    const newCats = [...cats];
    newCats.shift();
    return newCats;
}