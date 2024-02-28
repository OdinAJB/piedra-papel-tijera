import { useMemo } from "react";
import { STEPS } from "./constants/steps";
import PlayModule from "./modules/PlayModule";
import SelectionModule from "./modules/SelectionModule";
import useGameStore from "./store/GameStore";
import Score from "./components/Score";

const renderModule = (step: STEPS) => {
  switch (step) {
    case STEPS.SELECTION:
      return <SelectionModule />;
    case STEPS.PLAY:
      return <PlayModule />;
    case STEPS.GAME_OVER:
      return (
        <>
          <div className="text-center block text-4xl">GAMEOVER</div>
          <h1 className="text-center block text-5xl">Play Again?</h1>
          <br></br>
          <SelectionModule/>
        </>
      );

    default:
      return null;
  }
};

function App() {
  const step = useGameStore((state) => state.step);
  const module = useMemo(() => renderModule(step), [step]);

  return (
    <>
      <div>
        <h1 className="text-center font-extrabold text-5xl pt12">
          {" "}
          Rock, Paper, Scissors{" "}
        </h1>
        <Score />
        {module}
      </div>
    </>
  );
}

export default App;
