import { ResultsProps } from "../components/Results";

export function arrayVariables({
  NENFANTS,
  age,
  enCouple,
  commune,
  voisinage,
  niveauVie,
  chauffage,
  proprietaire,
}: ResultsProps) : number[] {
  
    return [NENFANTS, age<30 ? 1 : 0, 
        age>= 30 && age<45 ? 1 : 0, 
        age >=60 && age<75 ? 1 : 0, 
        age>=75 ? 1 : 0, 
        commune=="Rural ou petite ville" ? 1 : 0,
        commune=="Grande ville" ? 1 : 0,
        niveauVie=="Faible" ? 1 : 0,
        niveauVie=="Riche" ? 1 : 0,
        enCouple=="true" ? 1 : 0,
        proprietaire=="Proprietaire" ? 1 : 0,
        chauffage=="Chauffage électrique individuel" ? 1 : 0,
        chauffage=="Chauffage non-électrique" ? 1 : 0,
        voisinage=="Pavillonnaire" ?  1 : 0,

     ]
}