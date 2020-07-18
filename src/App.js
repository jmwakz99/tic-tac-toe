import React from "react";
import Game from "./components/game/game.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="game-name">Tic-Tac-Toe</h1>
      <Game />
    </div>
  );
}

export default App;
