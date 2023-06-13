// AgeInput.tsx
import { NumberInput } from "@mantine/core";

interface AgeInputProps {
    value: number | '';
    onChange: (value: number | '') => void;
    minAge: number;
    maxAge: number;
  }
  
  export function AgeInput({ value, onChange, minAge, maxAge }: AgeInputProps) {
    const handleAgeChange = (newValueAge: number | '') => {
        if (typeof newValueAge === 'number' && ((minAge !== undefined && newValueAge < minAge) || newValueAge > maxAge)) {
            return;
        }
      
        onChange(newValueAge);
    };

    return (
        <NumberInput
            value={value}
            onChange={handleAgeChange}
            placeholder="Votre âge"
            label="Votre âge"
            radius="lg"
            withAsterisk
            min={5}
        />
    );
}
