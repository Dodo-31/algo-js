// Fonction récursive pour calculer la factorielle d'un nombre
const factorial = (a) => {
  if (a === 0) return 1;
  return a * factorial(a - 1);
};

// Appel de la fonction
console.log(factorial(5)); // Affiche 120
console.log(factorial(0)); // Affiche 1
console.log(factorial(3)); // Affiche 6
