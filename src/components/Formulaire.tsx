// Formulaire.tsx
import { Stack } from "@mantine/core";
import { useState } from "react";
import { AgeInput } from './AgeInput';
import { NbrEnfantsInput } from './NbrEnfantsInput';
import { CoupleInput } from "./CoupleInput";

export function Formulaire() {
    const [age, setAge] = useState<number | ''>('');
    const [nbrEnfants, setNbrEnfants] = useState<number | ''>(0);
    const [enCouple, setEnCouple] = useState<string>("false");
    
    const minAge = 5;
    const maxAge = 100;
    const minNbrEnfants = 0;
    const maxNbrEnfants = 20;

    return (
        <Stack spacing="sm">
            <AgeInput value={age} onChange={setAge} minAge={minAge} maxAge={maxAge} />
            <NbrEnfantsInput value={nbrEnfants} onChange={setNbrEnfants} minNbrEnfants={minNbrEnfants} maxNbrEnfants={maxNbrEnfants} />
            <CoupleInput value={enCouple} onChange={setEnCouple} />
        </Stack>
    );
}
