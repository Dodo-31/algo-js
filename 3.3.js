const original = [1, 2, 3, 4, 5];
const copy = [];

// copie avec push()

// Initialisation let i = 0; on crée la variable i (compteur) et on lui donne la valeur 0, 0 parce que les tableaux en JavaScript sont indexés à partir de 0, le premier élément est original[0], le deuxième original[1],...

//tant que i est inférieur à original.length, la boucle continue.
//original.length donne le nombre d’éléments du tableau.
// i++ : à chaque tour on augmente i de 1: 0, 1, 2, 3, 4, jusqu’à 5 (original.length vaut 5 ici).

// { copy.push(original[i]); } : à chaque tour de boucle, on ajoute l’élément original[i] (le suivant élément i du tableau original) à la fin du tableau copy. 

// en gros, cette boucle parcourt tous les éléments du tableau original et les ajoute un par un au tableau copy.

// ex: si original = [10, 20, 30] :

//i = 0 → original[0] = 10 → copy.push(10) → copy = [10]
//i = 1 → original[1] = 20 → copy.push(20) → copy = [10, 20]
//i = 2 → original[2] = 30 → copy.push(30) → copy = [10, 20, 30]
//i = 3 → condition i < original.length (3 < 3) false → boucle s’arrête

for (let i = 0; i < original.length; i++) {
  copy.push(original[i]);
}

console.log(copy); 

// copie avec slice() (à l'ancienne).
// original.slice() : sans argument entre (), slice copie tous les éléments du tableau original dans un nouveau tableau.

const original1 = [1, 2, 3, 4, 5];
const copy1 = original1.slice();

console.log(copy1);

// copie avec spread [...] (plus moderne)

// au final meme résultat qu’avec slice().

// différence : spread peut être utilisé dans d’autres contextes (ex: pour fusionner des tableaux, ou pour passer des arguments à une fonction), tandis que slice est spécifique aux tableaux.
const original2 = [1, 2, 3, 4, 5];
const copy2 = [...original2];

console.log(copy2);

// il existe aussi la méthode Array.from() pour copier un tableau. et d'autres méthodes plus avancées selon les besoins spécifiques.

