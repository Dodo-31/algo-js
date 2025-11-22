const prompt = require("prompt-sync")();

// declaration de ma fonction flechée qui vas calculer la surface de mon rectangle
const calcSurface = (length, width) => length * width;

// Demande a l'utilisateur d'entrer la longueur et la largeur du rectangle
const length = Number(prompt("Entrez la longueur du rectangle : "));
const width = Number(prompt("Entrez la largeur du rectangle : "));
// Appel de la fonction et affichage du résultat
const surface = calcSurface(length, width);

// Affichage du résultat
console.log(`La surface du rectangle est : ${surface}`);

