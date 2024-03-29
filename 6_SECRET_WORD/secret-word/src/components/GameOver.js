import React from 'react'

import "./GameOver.css"

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <div>Fim de Jogo !</div>
      <h2>A sua pontuação foi: 
        <span>{score}</span>
      </h2>
      <button onClick={retry}>Jogar Novamente</button>
    </div>

  )
}

export default GameOver