import React from 'react'

import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <div>Game</div>
      <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>

  )
}

export default Game