const prompt = require("prompt-sync")();

// Fonction rand10() réutilisée depuis l'exercice précédent
const rand10 = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// const multirand(n) 

// ça prends un nombre n en argument, qui représente le nombre de valeurs aléatoires à générer. crée un tableau vide. Ensuite, on utilse une boucle pour générer n nombres aléatoires en appelant la fonction rand10() à chaque tour de boucle (itération) et on ajoute avec push() chaque nombre généré dans le tableau. Et pour terminer, la fonction renvoie le tableau rempli de nombres aléatoires.

const multiRand = (n) => {
  // tableau vide  
  const resultas = []; 

  for (let i = 0; i < n; i++) {
 // ajoute un nombre aléatoire dans le tableau
    resultas.push(rand10()); 
  }

 // renvoie le tableau final
  return resultas;
};

// Demande à l'utilisateur combien de nombres générer
const combien = Number(prompt("Combien de nombres aléatoires veux-tu générer ? "));

// Appel de la fonction multiRand et stockage du résultat
const valeur = multiRand(combien);

// Affichage du résultat
console.log("Tableau généré :", valeur);

// explications des mots-clés :

// en javascript, valeur (value) veut dire la valeur stockée dans une variable.

// const est un mot-clé utilisé pour déclarer une variable dont la valeur ne peut pas être réassignée.

// let est un mot-clé utilisé pour déclarer une variable dont la valeur peut être réassignée.

// résultat (result) veut dire le résultat d'une opération ou d'une fonction.

// tableau (array) est une structure de données qui permet de stocker plusieurs valeurs dans une seule variable.

//  boucle (loop) est une structure de contrôle qui permet de répéter un bloc de code plusieurs fois.

// itération (iteration) est le processus de répétition d'une boucle pour chaque élément d'une collection ou un nombre spécifié de fois.

// fonction (function) est un bloc de code réutilisable qui effectue une tâche spécifique.

// argument (argument) est une valeur passée à une fonction lors de son appel.
// push() est une méthode qui ajoute un ou plusieurs éléments à la fin d'un tableau et renvoie la nouvelle longueur du tableau.

// renvoyer (return) est une instruction qui permet de sortir d'une fonction et de renvoyer une valeur à l'endroit où la fonction a été appelée.

// math.random() est une fonction qui génère un nombre aléatoire compris entre 0 (inclus) et 1 (exclus).

// math.floor() est une fonction qui arrondit un nombre à l'entier inférieur le plus proche.

// => est la syntaxe utilisée pour définir une fonction fléchée (arrow function)

// console.log() est une fonction qui affiche des messages dans la console pour le débogage ou l'information.



