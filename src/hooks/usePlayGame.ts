import { useCallback, useState } from "react";
import { Answer } from "../types/answer";
import { Status } from "../types/status";
import { ANSWERS } from "../constants/answer";
import { STATUS } from "../constants/status";


const usePlayGame= () => {
    const [status, setStatus] = useState<Status | null>(null);
    const [npcAnswer, setNpcAnswer] = useState<Answer | null>(null);

    const generateNpcChoice = useCallback((choice: Answer) =>{
        const randomIndex = Math.floor(Math.random()* ANSWERS.length);
        const npcChoice = ANSWERS[randomIndex];
        
        setNpcAnswer(npcChoice);

        if(choice === npcChoice){
            setStatus(STATUS.DRAW);
            return;
        }

        if (choice=== ANSWERS[2] && npcAnswer === ANSWERS[0]){// ✌️ >   🤚         
            setStatus(STATUS.WIN);
            return;
        }

        if (choice=== ANSWERS[1] && npcAnswer === ANSWERS[2]){// ✊ >   ✌️         
            setStatus(STATUS.WIN);
            return;
        }

        if (choice=== ANSWERS[0] && npcAnswer === ANSWERS[1]){// 🤚 > ✊           🤚 ✊ ✌️
            setStatus(STATUS.WIN);
            return;
        }

        setStatus(STATUS.LOSE)

    }, []);

    return{status, npcAnswer, generateNpcChoice};
};

export default usePlayGame;