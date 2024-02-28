import useScoreStore from "../store/Score.Store"


const Score = () => {
    const [score, maxScore] = useScoreStore(state => [state.score, state.maxScore]);

    return (
        <div className="w-80 m-auto flex justify-around py-12">
            <h2 className="text-2xl">Score: {score}  </h2>
            <h2 className="text-2xl">Max Score: {maxScore} </h2>
        </div>
    )
}

export default Score;