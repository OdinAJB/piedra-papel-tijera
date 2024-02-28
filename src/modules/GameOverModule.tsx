import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore"
import useScoreStore from "../store/Score.Store";

const GameOverModule = () => {
    const setStep = useGameStore(state=> state.setStep);
    const resetScore= useScoreStore(state=> state.resetScore);

    const onClickPlayAgain = () => {
        setStep(STEPS.SELECTION);
        resetScore();
    }

    return(
        <button
      className="bg-gray-400 hover:bg-gray-600 rounded-lg w-40 pd-3 text-xl m-auto text-white block "
      onClick={onClickPlayAgain}
    >
      Play Again
    </button>
    )
}

export  default GameOverModule;