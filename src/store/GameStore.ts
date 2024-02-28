import { create } from "zustand";
import { Answer } from "../types/answer";

type GameStoreState={
    step: number;
    choice: Answer | null;
    setStep: (step: number) => void;
    setChoice: (choice: Answer) => void;
}

const useGameStore = create<GameStoreState>((set)=> ({
    step: 0,
    choice: null,
    setStep: (step: number) => set({step}),
    setChoice: (choice: Answer) => set({choice}),
}));

export default useGameStore; 
