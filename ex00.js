function creerPersonne(nom, age, ville) {
	let truc = {
        nom: nom,
        age: age,
        ville: ville
    } 
    return truc;
}

console.log(creerPersonne("Alice", 30, "Paris")); // { nom: 'Alice', age: 30, ville: 'Paris' }
console.log(creerPersonne("Bob", 25, "Lyon")); // { nom: 'Bob', age: 25, ville: 'Lyon' }