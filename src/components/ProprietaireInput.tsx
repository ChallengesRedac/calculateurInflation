// ProprietaireInput.tsx
import { Radio, Switch } from '@mantine/core';

interface ProprietaireInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProprietaireInput({ value, onChange }: ProprietaireInputProps) {
  return (
    <div>
      <Radio.Group
        value={value}
        onChange={onChange}
        label="Etes-vous propriétaire de votre logement ?"
        withAsterisk
      >
        <Radio value="Proprietaire" label="Oui" />
        <Radio value="Locataire" label="Non" />
      </Radio.Group>
    </div>
  );
}
