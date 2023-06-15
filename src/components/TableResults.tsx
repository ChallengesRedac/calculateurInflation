import { Stack, Table, Title, Text, Accordion } from '@mantine/core';
import { ResultsProps } from './Results';
import { arrayVariables } from '../libs/arrayVariable';

const elements = [
  { name: 'Carbon', coeff: 0.8 },
  { name: 'Carbon', coeff: 0.8 },
];

export function TableResults({
  NENFANTS,
  age,
  enCouple,
  commune,
  voisinage,
  niveauVie,
  chauffage,
  proprietaire,
}: ResultsProps) {
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
  return (
    <Stack>
      <Title order={2}>Pourquoi ?</Title>
      <Text>
        Nous consommons différemment selon nos caractéristiques. Typiquement, les personnes qui
        vivent hors des villes dépensent davantage de leur revenu en essence, ou les personnes âgées
        davantage en chauffage. Deux postes de consommation qui ont eu une inflation bien au-dessus
        de la normale, et qui explique donc les inégalités d'inflation.
      </Text>

      <Accordion>
        <Accordion.Item value="customization">
          <Accordion.Control>
            <Title order={2}>Détail pour votre profil : </Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack>
              <Text>
                Par exemple, voici l'impact de l'appartenance à différentes catégories sur le taux
                d'inflation en novembre 2022, en comparant à un groupe de référence.
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
                  <td>
                    {arrayVariable[0] == 0 ? <strong>Pas d'enfants</strong> : "Pas d'enfants"}
                  </td>
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
                    {arrayVariable[9] === 1 ? (
                      <strong>Habite en couple</strong>
                    ) : (
                      'Habite en couple'
                    )}
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
                  <td>
                    {arrayVariable[10] === 1 ? <strong>Propriétaire</strong> : 'Propriétaire'}
                  </td>
                  <td>+ 1.4 point</td>
                </tr>
              </Table>
              <Title order={3}>Type de chauffage</Title>
              <Table>
                <tr>
                  <td>
                    {arrayVariable[10] + arrayVariable[11] === 0 ? (
                      <strong>Chauffage collectif</strong>
                    ) : (
                      'Chauffage collectif'
                    )}
                  </td>
                  <td>Référence</td>
                </tr>
                <tr>
                  <td>
                    {arrayVariable[10] === 1 ? (
                      <strong>Chauffage électrique individuel</strong>
                    ) : (
                      'Chauffage électrique individuel'
                    )}
                  </td>
                  <td>-0.9 point</td>
                </tr>
                <tr>
                  <td>
                    {arrayVariable[11] === 1 ? (
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
                    {arrayVariable[12] === 0 ? (
                      <strong>Plutôt des immeubles</strong>
                    ) : (
                      'Plutôt des immeubles'
                    )}
                  </td>
                  <td>Référence</td>
                </tr>
                <tr>
                  <td>
                    {arrayVariable[12] === 1 ? (
                      <strong>Plutôt pavillonaire</strong>
                    ) : (
                      'Plutôt pavillonnaire'
                    )}
                  </td>
                  <td>+ 0.5 point</td>
                </tr>
              </Table>{' '}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
}
