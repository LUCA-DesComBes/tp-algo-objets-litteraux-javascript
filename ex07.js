function supprimerPropriete(obj, propriete) {
	return delete obj.ville;
}

// Tests
let charlie = { nom: "Charlie", age: 35, ville: "Marseille" };

supprimerPropriete(charlie, "ville");

console.log(charlie); // { nom: 'Charlie', age: 35 }