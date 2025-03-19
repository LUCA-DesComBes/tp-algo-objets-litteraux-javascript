function creerPersonne(nom, age, ville) {
	let truc = {
        name: nom,
        old: age,
        city: ville
    } 
    return truc;
}

console.log(creerPersonne("Alice", 30, "Paris")); // { nom: 'Alice', age: 30, ville: 'Paris' }
console.log(creerPersonne("Bob", 25, "Lyon")); // { nom: 'Bob', age: 25, ville: 'Lyon' }