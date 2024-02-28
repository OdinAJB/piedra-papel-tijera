import { STATUS } from "../constants/status";
import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore";
import useScoreStore from "../store/Score.Store";
import { Status } from "../types/status";

interface ButtonProps {
  status: Status | null;
}

const Button: React.FC<ButtonProps> = ({ status }) => {
  const setStep = useGameStore((state) => state.setStep);
  const increaseScore = useScoreStore(state=> state.increaseScore);

  const onClick = () => {
    switch (status) {
      case STATUS.WIN:
        increaseScore();
        setStep(STEPS.SELECTION);
        break;
      case STATUS.LOSE:
        setStep(STEPS.GAME_OVER);
        break;
      case STATUS.DRAW:
        setStep(STEPS.SELECTION);
        break;
      default:
        break;
    }
  };

  return (
    <button
      className="bg-gray-400 hover:bg-gray-600 rounded-lg w-40 pd-3 text-xl m-auto text-white block "
      onClick={onClick}
    >
      Continue
    </button>
  );
};

export default Button;
