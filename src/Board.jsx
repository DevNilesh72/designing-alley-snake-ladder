import React, { useContext, useMemo } from "react";
import { GameContext } from "./App";

export default function Board() {
  const { state } = useContext(GameContext);
  const rows = useMemo(() => {
    let rows = [];
    for (let i = 100; i > 0; i -= 10) {
      let row = [];
      for (let j = i; j > i - 10; j--) {
        row.push(
          <div className="box" key={j}>
            {j}
          </div>
        );
      }
      // if ((i / 10) % 2 == 1) {
      //   row.reverse();
      // }
      rows.push(row);
    }
    return rows;
  }, []);
  return (
    <div className="board">
      {rows}
      {state.players.map((player) => {
        return (
          <div
            className={`player ${player.id}`}
            key={player.id}
            style={{ left: player.position + 9 * 10 + "%" }}
          >
            {player.title}
          </div>
        );
      })}
      <div className="ladder"></div>
      <div className="snake"></div>
    </div>
  );
}
