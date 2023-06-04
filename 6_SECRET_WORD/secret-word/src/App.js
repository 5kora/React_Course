//CSS
import './App.css';

//React
import {useCallback, useEffect, useState} from "react"

//Data
import {wordsList, worldList} from "./data/words"

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"}
];

function App() {
  const [gameState, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");
  
  const pickWordAndCategory = () => {
    //Pick random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return {word, category}
  };

  //Starts the secret word game
  const startGame = () => {
    //Pick word and pick category
    const {word, category} = pickWordAndCategory();
    
    // create an array of letters
    let wordLetters = word.split('');

    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    //fill states
    setLetters(wordLetters);
    setPickedCategory(category);
    setPickedWord(word);

    setGameStage(stages[1].name);
  };

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameState === "start" && <StartScreen startGame={startGame}/>}
      {gameState === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameState === "end" && <GameOver retry={retry}/>}      
    </div>
  );
}

export default App;
