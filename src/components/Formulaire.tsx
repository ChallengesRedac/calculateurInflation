import { Button, Stack, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { AgeInput } from './AgeInput';
import { NbrEnfantsInput } from './NbrEnfantsInput';
import { CoupleInput } from './CoupleInput';
import { CommuneInput } from './CommuneInput';
import { NiveauVieInput } from './NiveauVieInput';
import { ChauffageInput } from './ChauffageInput';
import { ProprietaireInput } from './ProprietaireInput';
import { Results } from './Results';
import { VoisinageInput } from './VoisinageInput';

export function Formulaire() {
  const [age, setAge] = useState<number | ''>('');
  const [nbrEnfants, setNbrEnfants] = useState<number | ''>(0);
  const [enCouple, setEnCouple] = useState<string>('false');
  const [commune, setCommune] = useState<string>('');
  const [voisinage, setVoisinage] = useState<string>('');
  const [niveauVie, setNiveauVie] = useState<string>('');
  const [chauffage, setChauffage] = useState<string>('');
  const [proprietaire, setProprietaire] = useState<string>('Locataire');
  const [formulaireValide, setFormulaireValide] = useState<boolean>(false);

  const setterFunctions = {
    setAge,
    setNbrEnfants,
    setEnCouple,
    setCommune,
    setVoisinage,
    setNiveauVie,
    setChauffage,
    setProprietaire,
    setFormulaireValide,
  };

  const minAge = 18;
  const maxAge = 100;
  const minNbrEnfants = 0;
  const maxNbrEnfants = 20;

  const isFormComplete =
    age !== '' &&
    nbrEnfants !== '' &&
    commune !== '' &&
    niveauVie !== '' &&
    chauffage !== '' &&
    proprietaire !== '';

  const handleClick = () => {
    if (isFormComplete) {
      console.log('Formulaire validé !');
      setFormulaireValide(true);
    }
  };

  return (
    <Stack spacing="sm">
      <Title>Faites-vous partie des Français les plus touchés par l'inflation ?</Title>
      {!formulaireValide && (
        <>
          <Text c="dimmed" fz="sm">
            Aucune donnée personnelle ne quitte votre navigateur.
          </Text>
          <AgeInput value={age} onChange={setAge} minAge={minAge} maxAge={maxAge} />
          <NbrEnfantsInput
            value={nbrEnfants}
            onChange={setNbrEnfants}
            minNbrEnfants={minNbrEnfants}
            maxNbrEnfants={maxNbrEnfants}
          />
          <CoupleInput value={enCouple} onChange={setEnCouple} />
          <CommuneInput value={commune} onChange={setCommune} />
          <VoisinageInput value={voisinage} onChange={setVoisinage} />
          <NiveauVieInput value={niveauVie} onChange={setNiveauVie} />
          <ChauffageInput value={chauffage} onChange={setChauffage} />
          <ProprietaireInput value={proprietaire} onChange={setProprietaire} />

          <Button disabled={!isFormComplete} onClick={handleClick} component="a" href="#">
            Valider
          </Button>
        </>
      )}

      {formulaireValide && (
        <Results
          NENFANTS={nbrEnfants as number}
          age={age as number}
          enCouple={enCouple}
          commune={commune}
          voisinage={voisinage}
          niveauVie={niveauVie}
          chauffage={chauffage}
          proprietaire={proprietaire}
          formulaireValide={formulaireValide}
          {...setterFunctions}
        />
      )}
      <Text c="dimmed" fz="sm">
        Source : travaux à partir de{' '}
        <a href="https://www.insee.fr/fr/statistiques/4648339">
          l'enquête Budget des familles 2017 de l'Insee
        </a>{' '}
        et indice des prix harmonisés de l'Insee. Régression linéaire multiple, avec une
        significativité à 5%.
      </Text>
    </Stack>
  );
}
