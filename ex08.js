function afficherProprietes(obj) {
    let result = "";
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += `${key}: ${obj[key]}, `;
        }
    }
    return result.slice(0, -2); // On retire la dernière virgule et l'espace
}

console.log(afficherProprietes({ nom: "Alice", age: 30, ville: "Paris" }));
