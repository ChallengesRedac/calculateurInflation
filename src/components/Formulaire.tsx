import { Button, Stack, Text } from '@mantine/core';
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

  const minAge = 5;
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
      {!formulaireValide && (
        <>
          <Text c="dimmed" fz="sm">
            Aucune donnée ne quitte votre navigateur.
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

          <Button disabled={!isFormComplete} onClick={handleClick}>
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
        />
      )}
    </Stack>
  );
}
