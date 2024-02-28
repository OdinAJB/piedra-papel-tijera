import { Answer } from "../types/answer";

interface ChoiceProps {
  choice: Answer | null;
  onClick?: (answer: Answer) => void;
}

export const Choice = ({ choice, onClick }: ChoiceProps) => {
  const onClickChoice = () => onClick && choice && onClick(choice);
  return (
    <div className="rounde-full text-9xl">
      <button
        className="bg-gray-400 hover:bg-gray-600 rounded-full shadow-lg h-48 w-48"
        onClick={onClickChoice}
      >
        {choice ?? "🤔"}
      </button>
    </div>
  );
};
