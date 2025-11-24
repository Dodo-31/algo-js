// fonction calcDistance qui calcule la distance entre deux points dans un plan 2D
// chaque point est représenté par un tableau de deux éléments [x, y]
const calcDistance = (A, B) => {
  // A = [x1, y1], B = [x2, y2]
  const x1 = A[0];
  const y1 = A[1];
  const x2 = B[0];
  const y2 = B[1];

  // formule de la distance, ça sert à calculer la distance entre deux points. distance=(x2−x1)2+(y2−y1)2 est la formule de la distance euclidienne entre deux points dans un plan 2D. Math.sqrt joue le rôle de racine carrée, et ** 2 signifie au carré.

  // en gros, on utilise Math.sqrt pour calculer la racine carrée de la somme des carrés des différences des coordonnées

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};
// appel de la fonction avec des points d'exemple
// tableaux représentant les points A et B
const pointA = [1, 1];
const pointB = [2, 2];

// calcul de la distance entre les points A et B
const distance = calcDistance(pointA, pointB);
// toFixed(2) pour arrondir à 2 décimales, ex: 1,414213562373095 devient 1,41
console.log("Distance:", distance.toFixed(2));
