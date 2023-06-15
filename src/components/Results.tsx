import { useEffect, useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { excesInflation } from '../libs/excesInflation';
import InflationChart from './InflationChart';
import calculerMoyenne from '../libs/calculerMoyenne';
import { TableResults } from './TableResults';

export interface ResultsProps {
  NENFANTS: number;
  age: number;
  enCouple: string;
  commune: string;
  voisinage: string;
  niveauVie: string;
  chauffage: string;
  proprietaire: string;
}
export function Results({
  NENFANTS,
  age,
  enCouple,
  commune,
  voisinage,
  niveauVie,
  chauffage,
  proprietaire,
}: ResultsProps) {
  const [excessesInflation, setExcessesInflation] = useState<any[]>([]);
  const [rapport, setRapport] = useState<number>(0);
  let derniereInflation = 0;
  let dernierExces = 0;

  useEffect(() => {
    const calculatedValue = excesInflation({
      NENFANTS,
      age,
      enCouple,
      commune,
      voisinage,
      niveauVie,
      chauffage,
      proprietaire,
    });

    setExcessesInflation(calculatedValue);
    derniereInflation = calculatedValue[calculatedValue.length - 1].inflation;
    dernierExces = calculatedValue[calculatedValue.length - 1].excess;
    const moyenneInflationPerso = calculerMoyenne(calculatedValue, true);
    const moyenneInflationGenerale = calculerMoyenne(calculatedValue, false);
    setRapport(moyenneInflationPerso / moyenneInflationGenerale - 1);
    console.log(rapport);
  }, []);

  return (
    <Stack>
      <Text>
        <p>
          Avec votre profil, vous faites partie des Français et Françaises{' '}
          <strong>un peu {rapport <= 0 ? 'moins' : 'plus'}</strong> touchés par l'inflation.{' '}
        </p>
        <p>
          En effet, les personnes avec votre profil ont subi en moyenne une inflation{' '}
          <strong>{Math.abs(rapport * 100).toFixed(1)} % </strong> plus
          {rapport <= 0 ? ' faible' : ' élevée'} que la moyenne sur l'année écoulée.
        </p>
      </Text>
      <InflationChart data={excessesInflation} />
      <TableResults
        NENFANTS={NENFANTS}
        age={age as number}
        enCouple={enCouple}
        commune={commune}
        voisinage={voisinage}
        niveauVie={niveauVie}
        chauffage={chauffage}
        proprietaire={proprietaire}
      />
    </Stack>
  );
}
