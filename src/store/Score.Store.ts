import { create } from "zustand";

type ScoreStoreState={
    score: number;
    maxScore: number;
    increaseScore: () => void;
    resetScore: () => void;
}

const useScoreStore= create<ScoreStoreState>((set, get) =>({
    score: 0,
    maxScore: localStorage.getItem('maxScore')? parseInt(localStorage.getItem('maxScore') as string): 0,
    increaseScore: () => {
        const newScore = get().score + 1;
        if(newScore> get().maxScore){
            localStorage.setItem('maxScore', newScore.toString());
            set(()=> ({score:newScore, maxScore: newScore}));
        }else{
            set(()=> ({score: newScore}));
        }
        
    },
    resetScore: () => set({score: 0}),

}))

export default useScoreStore;