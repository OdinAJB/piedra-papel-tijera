import { STATUS } from "../constants/status";
import { Status } from "../types/status";

interface ResultProps{
    status: Status | null;
}

export const Result: React.FC<ResultProps> = ({status}) =>{
    switch(status){
        case STATUS.WIN:
            return <span className="text-3xl text-center block">You Win</span>
        case STATUS.LOSE:
            return <span className="text-3xl text-center block">You Lose</span>
        case STATUS.DRAW:
            return <span className="text-3xl text-center block">Draw Game</span>
        default:
            return null;
    }
}