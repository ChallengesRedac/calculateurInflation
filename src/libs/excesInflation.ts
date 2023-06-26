import { ResultsProps } from '../components/Results';
import data from '../data/inflationAnalysis_up_to2023-06.json';
import { arrayVariables } from './arrayVariable';

export function excesInflation({
  NENFANTS,
  age,
  enCouple,
  commune,
  voisinage,
  niveauVie,
  chauffage,
  proprietaire,
}: ResultsProps): any[] {
  const arrayVariable = arrayVariables({
    NENFANTS,
    age,
    enCouple,
    commune,
    voisinage,
    niveauVie,
    chauffage,
    proprietaire,
  });
  let results = [];
  const entriesMois = Object.entries(data);
  for (let i = 0; i < entriesMois.length; i++) {
    const [mois, value] = entriesMois[i];
    let entries = Object.entries(value);
    let excessInflationMois = 0;
    let inflationMoyenneR = entriesMois[i][1].inflationMoyenne;
    for (let j = 1; j < entries.length - 1; j++) {
      const [key, entryValue] = entries[j];
      const multipliedValue = entryValue * arrayVariable[j - 1];
      excessInflationMois += multipliedValue;
    }
    results.push({
      name: mois,
      excess: excessInflationMois.toFixed(1),
      inflation: (excessInflationMois + inflationMoyenneR).toFixed(1),
      mean: inflationMoyenneR,
    });
  }

  return results.reverse();
}
