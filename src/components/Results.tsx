import React, { useEffect, useState } from 'react';
import { Stack, Text } from '@mantine/core';
import data from '../data/inflationAnalysis_up_to2023-05.json';
import { arrayVariables } from '../libs/arrayVariable';
import { excesInflation } from '../libs/excesInflation';
import InflationChart from './InflationChart';

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
    console.log(dernierExces);
  }, []);

  return (
    <Stack>
      <Text>
        Vous faites partie des Français et Françaises un peu {dernierExces <= 0 ? 'moins' : 'plus'}{' '}
        touchés par l'inflation. "Les Français et les Françaises avec votre profil ont en moyenne
        une inflation un peu moins forte que la population"
      </Text>
      <InflationChart data={excessesInflation} />
    </Stack>
  );
}
