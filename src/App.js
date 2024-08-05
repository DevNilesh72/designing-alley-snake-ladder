import React, { useReducer } from "react";
import "./App.css";
import Board from "./Board";
import PlayerBoard from "./PlayerBoard";
import ScoreBoard from "./ScoreBoard";
export const GameContext = React.createContext();
const initState = {
  dice: 0,
  players: [
    {
      id: 'playerA',
      title: 'A',
      color: 'green',
      position: 0
    },
    {
      id: 'playerB',
      title: 'B',
      color: 'orange',
      position: 0
    },
  ],
}

function reducer(state, action){
  switch (action.type) {
    case 'SETPOSITION':
      let newState = {...state};
      newState.players.map(player => {
        if(player.id == action.payload.id){
          player.position = action.payload.position
        }
      })

      return newState;

    case 'SETDICE':
      return {
        ...state,
        dice: action.payload
      }
    
    default:
      break;
  }

  return state;
}
function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <div className="main">
      <header>
        <h1>Snake n Ladder</h1>
      </header>
      <main>
        <GameContext.Provider value={{ state, dispatch }}>
          <PlayerBoard />
          <Board />
          <ScoreBoard />
        </GameContext.Provider>
      </main>
    </div>
  );
}

export default App;
