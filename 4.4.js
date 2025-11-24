// Liste des apprenants (inputAr)
const learners = [
  "thelichekinge",
  "ethan",
  "Hetaska",
  "Enrique2802",
  "Trollman341",
  "Kisame25021990",
  "Léandre Mpore-Ghozzo",
  "Abdoul",
  "Aucouturier Jason",
  "xam1712",
  "Dodo-31",
  "MattWare",
  "Thomas",
  "lalbecade",
  "Gaetan",
  "Dimitri Gillain",
  "TyberCusa",
  "Johan"
];

// fonction fléchée pour sélectionner n apprenants aléatoires sans répétition
const pickLearner = (inputAr, n) => {
  if (n <= 0 || n >= inputAr.length) {
    return "Error: n doit être > 0 et < inputAr.length";
  }
// création d'un tableau pour stocker les apprenants sélectionnés
  const result = [];
  // pour éviter les répétitions, on utilise un Set pour stocker les index déjà utilisés
  const usedIndexes = new Set();

// boucle jusqu'à ce que nous ayons sélectionné n apprenants

// Tant que result contient moins de n éléments, on tire un nouvel index aléatoire. Math.random() * inputAr.length produit un float entre 0 et length. Math.floor le transforme en entier index valide.Si cet index n’a pas encore été utilisé, on l’ajoute au Set et on pousse le nom correspondant dans result. Si l’index était déjà utilisé, on ignore et la boucle continue.

// en résumé, cette fonction garantit que nous sélectionnons n apprenants uniques de manière aléatoire à partir de la liste fournie.
// en utilisant un Set pour suivre les index déjà choisis.
    while (result.length < n) {
    const randomIndex = Math.floor(Math.random() * inputAr.length);

// j'utolise ! pour vérifier si l'index n'a pas déjà été utilisé, et .has() pour vérifier la présence dans le Set
   if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      result.push(inputAr[randomIndex]);
    }
  }

  return result;
};

// ---------------------------------------------------------
// Appel de la fonction avec la liste
const selected = pickLearner(learners, 3);

// Affichage du résultat
console.log("Apprenants sélectionnés :", selected);
