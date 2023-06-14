import React from 'react';
import { Text } from '@mantine/core';
import data from '../data/inflationAnalysis_up_to2023-05.json';

interface ResultsProps {
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
  console.log(data); // You can view the loaded data in the browser console

  return <Text>{}</Text>;
}
