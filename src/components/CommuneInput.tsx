// CommuneInput.tsx
import { Select } from '@mantine/core';

interface CommuneInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function CommuneInput({ value, onChange }: CommuneInputProps) {
  return (
    <Select
      value={value}
      onChange={onChange}
      label="Où habitez vous ?"
      placeholder="Où habitez vous ?"
      data={[
        { value: 'Rural ou petite ville', label: 'Rural ou petite ville (- de 10 000 habitants)' },
        { value: 'Moyenne ville', label: 'Ville moyenne (entre 10 et 50 000 habitants)' },
        { value: 'Grande ville', label: 'Grande ville (plus de 50 000 habitants)' },
      ]}
    />
  );
}
