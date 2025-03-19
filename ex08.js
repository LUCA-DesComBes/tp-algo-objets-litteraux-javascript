function afficherProprietes(obj) {
	let result = "";
    return result += `nom: ${obj.nom}, age: ${obj.age}, ville: ${obj.ville}`;
}

console.log(afficherProprietes({ nom: "Alice", age: 30, ville: "Paris" })); // 'nom: Alice, age: 30, ville: Paris'