// Génère un nombre aléatoire entre 1 et 10
// const randa0 = () => c'est une fonction fléchée qui ne prend pas d'arguments
// return renvoie le resultat de la fonction la ou je l'ai appelée
// Math.floor: si jai un nombre à virgule, il arrondi à l'entier inférieur
// Math.random: génère un nombre aléatoire entre 0 et 1 mais comme je met *10, ça me donne un nombre entre 0 et 10, puis je rajoute +1 pour que ça soit entre 1 et 10

// en gros Math random genere mon nombre aléatoire, et ensuite Math floor arrondi ce nombre à l'entier inférieur

const rand10 = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// const randomValue = rand10(); appelle la fonction et stocke le résultat dans la variable randomValue
const randomValue = rand10();

// Affiche le nombre aléatoire généré
console.log("Nombre aléatoire entre 1 et 10 :", randomValue);

// explications chronologiques :
/*
Appel de la fonction :
randomValue = rand10()

        │
        ▼
  Math.random() → génère un float aléatoire entre 0 et 1
        │
        ▼
  * 10 → transforme le float en nombre entre 0 et 10
        │
        ▼
  Math.floor(...) → arrondit à l'entier inférieur (0 à 9)
        │
        ▼
  +1 → décale l'intervalle pour obtenir 1 à 10
        │
        ▼
  return → renvoie ce nombre entier à l'endroit où la fonction a été appelée
        │
        ▼
  randomValue ← reçoit le nombre
        │
        ▼
  console.log(randomValue) → affiche le nombre
*/
