import React, { useEffect, useState } from 'react';
import { Stack, Text } from '@mantine/core';
import data from '../data/inflationAnalysis_up_to2023-05.json';
import { arrayVariables } from '../libs/arrayVariable';
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
        Avec votre profil, vous faites partie des Français et Françaises un peu{' '}
        {rapport <= 0 ? 'moins' : 'plus'} touchés par l'inflation. En effet, les personnes avec
        votre profil ont subi en moyenne une inflation {Math.abs(rapport * 100).toFixed(1)} % plus
        {rapport <= 0 ? ' faible' : ' élevée'} que la moyenne sur l'année écoulée.
      </Text>
      <InflationChart data={excessesInflation} />
      <TableResults />
    </Stack>
  );
}
