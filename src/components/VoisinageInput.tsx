import { Select } from '@mantine/core';

interface VoisinageInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function VoisinageInput({ value, onChange }: VoisinageInputProps) {
  return (
    <Select
      value={value}
      onChange={onChange}
      label="Votre voisinage est :"
      placeholder="Votre voisinage est :"
      data={[
        { value: 'Pavillonnaire', label: 'Plutôt pavillonnaire' },
        { value: 'Immeubles', label: 'Plutôt des immeubles' },
      ]}
    />
  );
}
