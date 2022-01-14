import React, { useState } from "react";

const Game = () => {
  const [healthPlayer1, setHealthPlayer1] = useState(100);
  const [healthPlayer2, setHealthPlayer2] = useState(100);

  const [player1Point, setPlayer1Point] = useState(0);
  const [player2Point, setPlayer2Point] = useState(0);

  const min = 1;
  const max = 5;
  const randomShot = Math.floor(Math.random() * (max - min)) + min;

  const gunOne = () => {
    if (healthPlayer2 <= 0) {
      setHealthPlayer2(100);
      setPlayer1Point((two) => two + 1);
    }
    setHealthPlayer2((two) => two - randomShot);
    console.log(healthPlayer2);
  };

  const gunTwo = () => {
    if (healthPlayer1 <= 0) {
      setHealthPlayer1(100);
      setPlayer2Point((one) => one + 1);
    }
    setHealthPlayer1((one) => one - randomShot);
    console.log(healthPlayer1);
  };

  return (
    <div>
      <button onClick={gunOne}>Player-1 ︻デ═一</button>
      {healthPlayer1}

      <button onClick={gunTwo}>━╤デ╦ Player-2</button>
      {healthPlayer2}
      <br />
      {healthPlayer1 < 1 ? "player 2 wins this match" : null}
      {healthPlayer2 < 1 ? "player 1 wins this match" : null}
      <br />
      <p>Winner Board</p>
      <p>Player 1 : {player1Point}</p>
      <p>Player 2 : {player2Point}</p>

      <h1 style={{ color: "red" }}>
        {/* {player1Point === 3 ? "Player One wins" : "Player two Wins"} */}
        {player1Point === 3 ? "Game Over Player One WINS" : ""}
        {player2Point === 3 ? "Game Over Player TWO WINS" : ""}
      </h1>
    </div>
  );
};

export default Game;
