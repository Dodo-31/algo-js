const prompt = require('prompt-sync')({ sigint: true }); 

const n = Number(prompt("Entrez un nombre")); 

// initialise la variable sum (la somme) à 0
// sum va accumuler la somme de tous les nombres entrés
let sum = 0; 



for (let i = 1; i <= n; i++) { 
    // boucle qui commence à 1 et s'arrête à n
    // i = compteur qui permet de savoir combien de nombres on a déjà demandé

    const num = Number(prompt(`Entrez le nombre ${i} : `)); 
    // demande un nombre à l'utilisateur
    // Number() convertit la saisie en nombre
    // num = le nombre actuellement saisi (ma “déclaration” que l'on va ajouter à sum)

    sum += num; 
    // ajoute le nombre saisi (num) à la somme totale (sum)
    // équivalent à sum = sum + num
}

console.log(`La somme de tous les nombres est : ${sum}`); 
// affiche le résultat final de la somme
