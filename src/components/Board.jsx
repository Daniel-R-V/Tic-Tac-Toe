import { useState } from "react";
import { Square } from "./Square";
import { Player } from "./Player";

export const Board = () => {
    const [gameValues, setGameValues] = useState(Array(9).fill(null));
    const [isPlayerX, setIsPlayerX] = useState(true);
    const [winner, setWinner] = useState(null);

    const calculateWinner = () => {
        for (let i = 0; i < gameValues.length; i++) {
            if (gameValues[i] + gameValues[i + 1] + gameValues[i + 2] === "XXX" || gameValues[i] + gameValues[i + 1] + gameValues[i + 2] === "OOO") {
                return gameValues[i];
            } else if (gameValues[i] + gameValues[i + 3] + gameValues[i + 6] === "XXX" || gameValues[i] + gameValues[i + 3] + gameValues[i + 6] === "OOO") {
                return gameValues[i];
            } else if (gameValues[i] + gameValues[i + 4] + gameValues[i + 8] === "XXX" || gameValues[i] + gameValues[i + 4] + gameValues[i + 8] === "OOO") {
                return gameValues[i];
            } else if (gameValues[i] + gameValues[i + 2] + gameValues[i + 4] === "XXX" || gameValues[i] + gameValues[i + 2] + gameValues[i + 4] === "OOO") {
                return gameValues[i];
            }
        }
    };

    const updateValue = (index) => {
        gameValues[index] = isPlayerX ? "X" : "O";
        setGameValues([...gameValues]);
        const newWinner = calculateWinner();
        setWinner(newWinner);
        if (!newWinner) {
            setIsPlayerX(!isPlayerX);
        }
    };

    if (winner) {
        const color = winner === "X" ? "text-green-500" : "text-red-500";

        return (
            <div>
                <span className="block text-center font-extrabold text-3xl tracking-wider">
                    Winner is:
                    <span className={`${color}`}> {winner} </span>
                </span>
            </div>
        );
    }

    return (
        <div>
            <Player isPlayerX={isPlayerX} />
            <div className="grid grid-cols-3 mx-auto w-64 border-slate-200 border-solid border-2">
                {gameValues.map((item, index) => {
                    return <Square key={index} item={item} index={index} updateValue={updateValue} />;
                })}
            </div>
        </div>
    );
};
