import { Choice } from "../components/Choice";
import { ANSWERS } from "../constants/answer";
import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore";
import { Answer } from "../types/answer";

const SelectionModule = () => {
  const [setChoice, setStep] = useGameStore((state) => [
    state.setChoice,
    state.setStep,
  ]);

  const onClickChoice = (choice: Answer) => {
    setChoice(choice);
    setStep(STEPS.PLAY);
  };

  return (
    <div className="flex row justify-around">
      {ANSWERS.map((answer) => (
        <Choice choice={answer} onClick={onClickChoice} />
      ))}
    </div>
  );
};

export default SelectionModule;
