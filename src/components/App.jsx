import React, { useState } from "react";
import Game from "./Game.jsx";

function App(){
const [gameStart, setGameStart] = useState(false);

function startGame(){
    setGameStart(true);
}


return (
    <div>
    <div className="largeContainer">
    <div>
    <h1>Tic Tac Toe</h1>
    <button className="start-btn" hidden={gameStart?true:false} onClick={startGame}>PLAY</button>
   
    </div>
    {gameStart?<Game/>:null}
    </div>
    <footer>Joana Martins ©{new Date().getFullYear()}</footer>
    </div>
);
}

export default App;