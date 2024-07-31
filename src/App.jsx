import { useState } from "react";

import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"

function App() {
  const [isActive, setIsActive] = useState("X");

function handleSelectSquare() {
  setIsActive((currentlyIsActive) => currentlyIsActive === "X" ? "O" : "X")

}

  return (
    <main>
      <div id="game-container">
       <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isPlaying={isActive === "X"}/>
        <Player initialName="Player 2" symbol="O" isPlaying={isActive === "O"}/>
       </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={isActive}/>
      </div>
        LOG
    </main>
  )
}

export default App
