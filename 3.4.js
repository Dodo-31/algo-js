// Méthode Math + spread : on utilise Math.min() et Math.max() avec ...numbers pour trouver le minimum et le maximum du tableau en une seule ligne.

// avantage : code concis et lisible, rapide pour des tableaux de taille modérée.

// inconvénient : peut échouer pour des tableaux très grands en raison de la limite d'arguments de la fonction.

const numbers = [10, 5, 8, 20, 3];

const min = Math.min(...numbers);

const max = Math.max(...numbers);

console.log(`Le minimum est : ${min}`);
console.log(`Le maximum est : ${max}`);

// methode avec for : on parcourt le tableau avec une boucle for pour trouver le minimum et le maximum.

const numbers2 = [10, 5, 8, 20, 3];

// initialise min avec le premier élément
let min2 = numbers2[0]; 
let max2 = numbers2[0];

// pas besoin de i = 0 car on a déjà initialisé min et max avec le premier élément 
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] < min2) min2 = numbers2[i];
    if (numbers2[i] > max2) max2 = numbers2[i];
}

console.log(`Le minimum est : ${min2}`);
console.log(`Le maximum est : ${max2}`);

// il esixte aussi la methode reduce pour trouver le min et le max
