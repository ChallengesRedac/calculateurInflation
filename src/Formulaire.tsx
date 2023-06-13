import { NumberInput, Stack } from "@mantine/core";
import { useState } from "react";


export function Formulaire() {

    const [age, setAge] = useState<number | ''>('');
    const [nbrEnfants, setNbrEnfants] = useState<number | ''>(0);

    const minAge = 5;
    const maxAge = 100;
    const minNbrEnfants = 0;
    const maxNbrEnfants = 20;

    const handleAgeChange = (newValueAge: number | '') => {
        if (typeof newValueAge === 'number' && ((minAge !== undefined && newValueAge < minAge) || newValueAge > maxAge)) {
          return; // Skip calling setValue if the value is less than min or greater than max
        }
      
        setAge(newValueAge);
      };

      const handleNbrEnfantsChange = (newValueNbrEnfants: number | '') => {
        if (typeof newValueNbrEnfants === 'number' && ((minNbrEnfants !== undefined && newValueNbrEnfants < minNbrEnfants) || newValueNbrEnfants > maxNbrEnfants)) {
          return; // Skip calling setValue if the value is less than min or greater than max
        }
      
        setNbrEnfants(newValueNbrEnfants);
      };
      

  return (
    <Stack spacing="sm">
            <NumberInput
      value={age}
      onChange={handleAgeChange}
      placeholder="Votre âge"
      label="Votre âge"
      radius="lg"
      withAsterisk
      min={5}
    />
    <NumberInput
      value={nbrEnfants}
      onChange={handleNbrEnfantsChange}
      placeholder="Combien avez-vous d'enfants ?"
      label="Combien avez-vous d'enfants ?"
      radius="lg"
      withAsterisk
      min={0}
    />
    
    </Stack>
  );
}
