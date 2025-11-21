let number1 = [1, 2, 3, 4, 5];
let number2 = [100, 101, 102];

// Fonction fléchée pour calculer la moyenne d'un tableau
// averageNumber (average = moyenne) : nom de la fonction
// numbers : paramètre qui recevra n'importe quel tableau
const averageNumber = (number) => {
    let sum = 0; // variable dans laquelle on va additionner les valeurs du tableau

    // Parcourt chaque élément du tableau
    for (let num of number) {
        // on ajoute chaque valeur à sum
        sum += num; 
    }

    // La moyenne = somme totale / (divisé) nombre d'éléments.
    // number.length : donne le nombre d'éléments dans le tableau number(utile pour calculer la moyenne : somme / nombre d'éléments).

    // En gros, returnSum / number.length, ça renvoie à la somme totale divisée par le nombre d'éléments du tableau.
    return sum / number.length;
};

// Affichage de la moyenne du premier tableau
console.log(`La moyenne de [${number1}] est : ${averageNumber(number1)}`);

// Affichage de la moyenne du deuxième tableau
console.log(`La moyenne de [${number2}] est : ${averageNumber(number2)}`);
