// NiveauVieInput.tsx
import { Select } from '@mantine/core';

interface NiveauVieInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function NiveauVieInput({ value, onChange }: NiveauVieInputProps) {
  return (
    <Select
      value={value}
      onChange={onChange}
      label="Estimez votre niveau de vie :"
      placeholder="Niveau de vie"
      data={[
        { value: 'Faible', label: 'Faible (- de 16k€/an/individu)' },
        { value: 'Moyen', label: 'Moyen' },
        { value: 'Riche', label: 'Elevé (+ de 35k€/an/individu)' },
        // ajoutez d'autres niveaux de vie ici
      ]}
    />
  );
}
