// ChauffageInput.tsx
import { Select } from '@mantine/core';

interface ChauffageInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function ChauffageInput({ value, onChange }: ChauffageInputProps) {
  return (
    <Select
      value={value}
      onChange={onChange}
      label="Comment vous chauffez-vous ?"
      placeholder="Type de chauffage"
      data={[
        { value: 'Chauffage collectif', label: 'Chauffage collectif' },
        { value: 'Chauffage électrique individuel', label: 'Chauffage électrique individuel' },
        { value: 'Chauffage non-électrique', label: 'Chauffage non-électrique' },
        // ajoutez d'autres types de chauffage ici
      ]}
    />
  );
}
