const prompt = require('prompt-sync')({ sigint: true });

const n = Number(prompt("Entrez un nombre"));

// initialise la variable sum (la somme) à 0
// sum va accumuler la somme de tous les nombres entrés
let sum = 0;



for (let i = 1; i <= n; i++) {

    const num = Number(prompt(`Entrez le nombre ${i} : `));

    // ajoute le nombre saisi (num) à la somme totale (sum)
    // équivalent à sum = sum + num
    sum += num;
}

// affiche le résultat final de la somme
console.log(`La somme de tous les nombres est : ${sum}`);

