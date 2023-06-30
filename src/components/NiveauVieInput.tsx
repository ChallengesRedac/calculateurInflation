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
        { value: 'Moyen', label: 'Moyen (de 16 à 35k€/an/individu)' },
        { value: 'Riche', label: 'Elevé (+ de 35k€/an/individu)' },
      ]}
    />
  );
}
