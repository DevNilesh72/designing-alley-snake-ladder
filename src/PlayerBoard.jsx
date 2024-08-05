import React, { useContext } from "react";
import { GameContext } from "./App";

export default function PlayerBoard() {
  const { state, dispatch} = useContext(GameContext)
  function rollDice() {
    dispatch({type: "SETDICE", payload: Math.floor((Math.random() * 10) % 6) + 1});
  }
  return (
    <div className="playerBoard">
      <button type="button" className="diceRoll" onClick={rollDice}>
        Roll Dice
      </button>
      <div>Value = {state.dice}</div>
    </div>
  );
}
