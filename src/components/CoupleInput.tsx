// CoupleInput.tsx
import { Radio, Switch } from "@mantine/core";

interface CoupleInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function CoupleInput({ value, onChange }: CoupleInputProps) {
  return (
    <div>
      <Radio.Group
      value={value}
      onChange={onChange}
      label="Vivez-vous en couple ?"
      withAsterisk
    >
      <Radio value="true" label="Oui" />
      <Radio value="false" label="Non" />
    </Radio.Group>
    </div>
  );
}
