// NbrEnfantsInput.tsx
import { NumberInput } from '@mantine/core';

interface NbrEnfantsInputProps {
  value: number | '';
  onChange: (value: number | '') => void;
  minNbrEnfants: number;
  maxNbrEnfants: number;
}

export function NbrEnfantsInput({
  value,
  onChange,
  minNbrEnfants,
  maxNbrEnfants,
}: NbrEnfantsInputProps) {
  const handleNbrEnfantsChange = (newValueNbrEnfants: number | '') => {
    if (
      typeof newValueNbrEnfants === 'number' &&
      ((minNbrEnfants !== undefined && newValueNbrEnfants < minNbrEnfants) ||
        newValueNbrEnfants > maxNbrEnfants)
    ) {
      return;
    }

    onChange(newValueNbrEnfants);
  };

  return (
    <NumberInput
      value={value}
      onChange={handleNbrEnfantsChange}
      placeholder="Combien avez-vous d'enfants ?"
      label="Combien avez-vous d'enfants ?"
      withAsterisk
      min={0}
    />
  );
}
