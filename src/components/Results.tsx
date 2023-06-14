import React from 'react';
import { Text } from '@mantine/core';
import data from '../data/inflationAnalysis_up_to2023-05.json';
import { arrayVariables } from '../libs/arrayVariable';

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
  console.log(data['2023-01']); // You can view the loaded data in the browser console
  console.log(
    arrayVariables({
      NENFANTS,
      age,
      enCouple,
      commune,
      voisinage,
      niveauVie,
      chauffage,
      proprietaire,
    })
  );
  return <Text>{}</Text>;
}
