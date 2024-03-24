// Write your solution here!
const cats= ["Milo","Otis","Garfield"]
function destructivelyAppendCat(name){
    const end = cats.push("Ralph")
    console.log(end);
}
function destructivelyPrependCat(name){
    const beginning=cats.unshift("Bob")
    console.log(beginning);
}
function destructivelyRemoveLastCat(name){
    const last= cats.pop()
    console.log(cats);
}
function destructivelyRemoveFirstCat(name){
    const first= cats.shift()
    console.log(cats);
}
function appendCat (name) {
    let newCats = [...cats, name];
    return newCats;
}
function prependCat (name){
    let afterCats = [name,...cats]
    return afterCats;
}
function removeLastCat() {
    let lastCats = cats.slice(0, -1);
    return lastCats;
}
function removeFirstCat() {
    let firsCats = cats.slice(1)
    return firsCats;
}