const prompt = require('prompt-sync')({ sigint: true });

const number = Number(prompt("Entrez un nombre entre 1 et 7 : "));

// switch c'est si ex: si number vaut 3 switch va chercher la case 3
// Chaque case correspond à une valeur possible de number.
// break dit, arrête de regarder les autres cases et sors du switch. Sans break, le programme continuerait à exécuter tous les cases suivants, même si number ne correspond pas.
switch (number) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
        break;
        // default c'est sinon ex: sinon execute ma declaration
    default:
        console.log("Nombre invalide. Veuillez entrer un nombre entre 1 et 7.");
}
