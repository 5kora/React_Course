import React from 'react'

import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: 000</span>
      </p>
      <h1> Adivinhe a palavra: </h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span> Dica..</span>
      </h3>
      <div className="wordContainer">
        <span className='letter'>A</span>
        <span className="clankSquare"></span>
      </div>

    </div>

  )
}

export default Game