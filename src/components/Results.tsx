import { useEffect, useState } from 'react';
import { Button, Flex, Stack, Table, Text, Title } from '@mantine/core';
import { excesInflation } from '../libs/excesInflation';
import InflationChart from './InflationChart';
import calculerMoyenne from '../libs/calculerMoyenne';
import { arrayVariables } from '../libs/arrayVariable';
import { ArrowRight, InfoCircle } from 'tabler-icons-react';

export interface ResultsComponentProps {
  NENFANTS: number;
  age: number;
  enCouple: string;
  commune: string;
  voisinage: string;
  niveauVie: string;
  chauffage: string;
  proprietaire: string;
  formulaireValide: boolean;
  setAge: React.Dispatch<React.SetStateAction<number | ''>>;
  setNbrEnfants: React.Dispatch<React.SetStateAction<number | ''>>;
  setEnCouple: React.Dispatch<React.SetStateAction<string>>;
  setCommune: React.Dispatch<React.SetStateAction<string>>;
  setVoisinage: React.Dispatch<React.SetStateAction<string>>;
  setNiveauVie: React.Dispatch<React.SetStateAction<string>>;
  setChauffage: React.Dispatch<React.SetStateAction<string>>;
  setProprietaire: React.Dispatch<React.SetStateAction<string>>;
  setFormulaireValide: React.Dispatch<React.SetStateAction<boolean>>;
}

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
  formulaireValide,
  setAge,
  setNbrEnfants,
  setEnCouple,
  setCommune,
  setVoisinage,
  setNiveauVie,
  setChauffage,
  setProprietaire,
  setFormulaireValide,
}: ResultsComponentProps) {
  const [excessesInflation, setExcessesInflation] = useState<any[]>([]);
  const [rapport, setRapport] = useState<number>(0);
  const [detail, setDetail] = useState<boolean>(false);

  function handleReset(): void {
    setDetail(false);
    setFormulaireValide(false);
    setAge('');
    setNbrEnfants(0);
    setEnCouple('false');
    setCommune('');
    setVoisinage('');
    setNiveauVie('');
    setChauffage('');
    setProprietaire('Locataire');
  }

  let derniereInflation = 0;
  let dernierExces = 0;

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
      {!detail && (
        <>
          <Text>
            <p>
              Vous faites partie des Français et Françaises{' '}
              <strong>un peu {rapport <= 0 ? 'moins' : 'plus'}</strong> touchés par l'inflation.{' '}
            </p>
            <p>
              En effet, les personnes avec votre profil ont connu, en moyenne, une inflation{' '}
              <strong>{Math.abs(rapport * 100).toFixed(1)} % </strong> plus
              {rapport <= 0 ? ' faible' : ' élevée'} que l'inflation de la population générale sur
              l'année écoulée.
            </p>
          </Text>
          <InflationChart data={excessesInflation} />
          <Stack>
            <Title order={2}>Pourquoi ?</Title>
            <Text>
              Nous consommons différemment selon nos caractéristiques. Typiquement, les personnes
              qui vivent hors des villes dépensent davantage de leur revenu en essence, ou les
              personnes âgées davantage en chauffage. Deux postes de consommation qui ont eu une
              inflation bien au-dessus de la normale, et qui explique donc les inégalités
              d'inflation.
            </Text>
            <Flex gap="md">
              <Button onClick={handleReset} color="gray">
                Recommencer
              </Button>
              <Button onClick={() => setDetail(true)}>
                Détail pour votre profil
                <ArrowRight size={18} />
              </Button>
            </Flex>
          </Stack>
        </>
      )}
      {detail && (
        <>
          <Title order={2}>Détail pour votre profil </Title>

          <Stack>
            <Text>
              Pour estimer si votre profil vous classe dans ceux qui subissent le plus l'inflation,
              on peut regarder, variable après variable, la différence avec un groupe de référence.
              Un exemple ici, en novembre 2022, au pic de l'inflation :
            </Text>
            <Text c="dimmed" fz="sm">
              Régression linéaire multiple, avec une significativité à 5%.
            </Text>
            <Title order={3}>Nombre d'enfants</Title>
            <Table>
              <tr>
                <td>
                  {' '}
                  {arrayVariable[0] > 0 ? <strong>Nombre d'enfants</strong> : "Nombre d'enfants"}
                </td>
                <td>+ 0.1 point par enfant</td>
              </tr>
              <tr>
                <td>{arrayVariable[0] == 0 ? <strong>Pas d'enfants</strong> : "Pas d'enfants"}</td>
                <td>Référence</td>
              </tr>
            </Table>
            <Title order={3}>Catégorie d'âge</Title>
            <Table>
              <tr>
                <td>
                  {arrayVariable[1] + arrayVariable[2] + arrayVariable[3] + arrayVariable[4] ===
                  0 ? (
                    <strong>De 45 à 60 ans</strong>
                  ) : (
                    'De 45 à 60 ans'
                  )}
                </td>
                <td>Référence</td>
              </tr>
              <tr>
                <td>
                  {arrayVariable[1] === 1 ? <strong>Moins de 30 ans</strong> : 'Moins de 30 ans'}
                </td>
                <td>-0.5 point</td>
              </tr>
              <tr>
                <td>
                  {arrayVariable[2] === 1 ? <strong>De 30 à 44 ans</strong> : 'De 30 à 44 ans'}
                </td>
                <td>-0.3 point</td>
              </tr>
              <tr>
                <td>
                  {arrayVariable[3] === 1 ? <strong>De 60 à 74 ans</strong> : 'De 60 à 74 ans'}
                </td>
                <td>+ 0.4 point</td>
              </tr>
              <tr>
                <td>
                  {arrayVariable[4] === 1 ? <strong>75 ans et plus</strong> : '75 ans et plus'}
                </td>
                <td>+ 0.7 point</td>
              </tr>
            </Table>
            <Title order={3}>Taille de l'aire urbaine</Title>
            <Table>
              <tr>
                <td>
                  {arrayVariable[5] + arrayVariable[6] === 0 ? (
                    <strong>Ville moyenne</strong>
                  ) : (
                    'Ville moyenne'
                  )}
                </td>
                <td>Référence</td>
              </tr>
              <tr>
                <td>
                  {arrayVariable[5] === 1 ? (
                    <strong>Rural et petite ville</strong>
                  ) : (
                    'Rural et petite ville'
                  )}
                </td>
                <td>+0.3 point</td>
              </tr>

              <tr>
                <td>{arrayVariable[6] === 1 ? <strong>Grande ville</strong> : 'Grande ville'}</td>
                <td>-0.1 point</td>
              </tr>
            </Table>
            <Title order={3}>Niveau de vie</Title>
            <Table>
              <tr>
                <td>
                  {arrayVariable[7] + arrayVariable[8] === 0 ? <strong>Moyen</strong> : 'Moyen'}
                </td>
                <td>Référence</td>
              </tr>
              <tr>
                <td>{arrayVariable[7] === 1 ? <strong>Faible</strong> : 'Faible'}</td>
                <td>+ 0.1 point</td>
              </tr>

              <tr>
                <td>{arrayVariable[8] === 1 ? <strong>Elevé</strong> : 'Elevé'}</td>
                <td>- 0.1 point</td>
              </tr>
            </Table>
            <Title order={3}>Situation de vie</Title>
            <Table>
              <tr>
                <td>{arrayVariable[9] === 0 ? <strong>Vit seul(e)</strong> : 'Vit seul(e)'}</td>
                <td>Référence</td>
              </tr>
              <tr>
                <td>
                  {arrayVariable[9] === 1 ? <strong>Habite en couple</strong> : 'Habite en couple'}
                </td>
                <td>+ 0.2 point</td>
              </tr>
            </Table>
            <Title order={3}>Propriété de son logement</Title>
            <Table>
              <tr>
                <td>{arrayVariable[10] === 0 ? <strong>Locataire</strong> : 'Locataire'}</td>
                <td>Référence</td>
              </tr>
              <tr>
                <td>{arrayVariable[10] === 1 ? <strong>Propriétaire</strong> : 'Propriétaire'}</td>
                <td>+ 1.4 point</td>
              </tr>
            </Table>
            <Title order={3}>Type de chauffage</Title>
            <Table>
              <tr>
                <td>
                  {arrayVariable[11] + arrayVariable[12] === 0 ? (
                    <strong>Chauffage collectif</strong>
                  ) : (
                    'Chauffage collectif'
                  )}
                </td>
                <td>Référence</td>
              </tr>
              <tr>
                <td>
                  {arrayVariable[11] === 1 ? (
                    <strong>Chauffage électrique individuel</strong>
                  ) : (
                    'Chauffage électrique individuel'
                  )}
                </td>
                <td>-0.9 point</td>
              </tr>
              <tr>
                <td>
                  {arrayVariable[12] === 1 ? (
                    <strong>Chauffage non-électrique</strong>
                  ) : (
                    'Chauffage non-électrique'
                  )}
                </td>
                <td>-0.7 point</td>
              </tr>
            </Table>
            <Title order={3}>Type de voisinage</Title>
            <Table>
              <tr>
                <td>
                  {arrayVariable[13] === 0 ? (
                    <strong>Plutôt des immeubles</strong>
                  ) : (
                    'Plutôt des immeubles'
                  )}
                </td>
                <td>Référence</td>
              </tr>
              <tr>
                <td>
                  {arrayVariable[13] === 1 ? (
                    <strong>Plutôt pavillonnaire</strong>
                  ) : (
                    'Plutôt pavillonnaire'
                  )}
                </td>
                <td>+ 0.5 point</td>
              </tr>
            </Table>{' '}
            <Button onClick={handleReset} color="gray">
              Recommencer
            </Button>
          </Stack>
        </>
      )}
    </Stack>
  );
}
