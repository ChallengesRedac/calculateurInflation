interface Data {
  inflation: string;
  mean: string;
}

export default function calculerMoyenne(data: Data[], perso: boolean): number {
  const derniereDonnees = data.slice(-12); // Sélectionner les 12 dernières entrées
  let somme = 0;
  if (perso) {
    somme = derniereDonnees.reduce((acc, entry) => acc + parseFloat(entry.inflation), 0); // Calculer la somme des valeurs d'inflation
  } else {
    somme = derniereDonnees.reduce((acc, entry) => acc + parseFloat(entry.mean), 0); // Calculer la somme des valeurs d'inflation
  }
  const moyenne = somme / 12; // Calculer la moyenne

  return moyenne;
}
