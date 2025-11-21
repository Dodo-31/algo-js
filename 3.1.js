let number1 = [1, 2, 3, 4, 5];
let number2 = [100, 101, 102];

// Fonction fléchée pour calculer la somme d'un tableau
// sunNumber: nom de la variable qui contient ma fonction
// number: parametres de la fonction qui va recevoir mes tableaux, number1 et number2

// Contrairement à une boucle, qui serait répétitive, ici grâce à la fonction fléchée, je peux réutiliser la même fonction pour autant de tableaux que je veux,sans avoir besoin de créer une nouvelle boucle ou une nouvelle variable à chaque fois.

// => : indique que c'est une fonction fléchée      
// {} : délimite le corps de la fonction

const sumNumber = (number) => {
    // let sum = 0; initialise la variable sum qui va contenir la somme
    let sum = 0; 
    // parcourir chaque élément du tableau 
    for (let num of number) {
        // ajoute le nombre actuel (num) à la somme totale (sum)
        sum += num; 
    }
    // sert à renvoyer le résultat du calcul là où la fonction a été appelée
    return sum; // retourner la somme totale calculée
};

// Calcul et affichage pour le premier tableau

//console.log:vfonction qui affiche quelque chose dans la console.Tout ce que je met entre les parenthèses va s’afficher.

// template string: Utiliser un template string avec `${...}` est plus pratique que la concaténation classique, car on peut directement insérer des variables ou des expressions dans la chaîne. Sinon, il faudrait écrire "texte" + variable + "texte" + autreVariable + ..., ce qui devient rapidement long et compliqué.

// ${number1}: insère le contenu du tableau number1 dans la chaîne de caractères.

// ${sumNumber(number1)} on appelle la fonction fléchée sunnumber en lui passant le tableau correspondant.La fonction calcule la somme du tableau et renvoie le résultat grâce à return sum.

console.log(`La somme de [${number1}] est : ${sumNumber(number1)}`);

// Calcul et affichage pour le deuxième tableau
console.log(`La somme de [${number2}] est : ${sumNumber(number2)}`);
