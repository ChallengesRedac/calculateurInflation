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
        { value: 'Pauvre', label: 'Faible' },
        { value: 'Moyen', label: 'Moyen' },
        { value: 'Riche', label: 'Elevé' },
        // ajoutez d'autres niveaux de vie ici
      ]}
    />
  );
}
