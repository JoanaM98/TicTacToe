import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa6";

function Game() {
const [winningCells,setWinningCells]= useState([]);
const [currentPlayer,setCurrentPlayer]=useState(1);
const [turn,setTurn]=useState(1);
const [victory,setVictory] = useState(false);
const [title,setTitle] = useState(<p>Player 1's Turn</p>);
const [cell1, setCell1]=useState();
const [cell2, setCell2]=useState();
const [cell3, setCell3]=useState();
const [cell4, setCell4]=useState();
const [cell5, setCell5]=useState();
const [cell6, setCell6]=useState();
const [cell7, setCell7]=useState();
const [cell8, setCell8]=useState();
const [cell9, setCell9]=useState();
let symbol;


//Game Turn
function playTurn(e){
    if (victory || turn>9) return;
    symbol = currentPlayer==1?"X":"O";
   
     const cell = (e.target.id);

function updateCell(cellSetter,currentValue,id){
    if(currentValue===undefined){
        cellSetter(symbol);
        setTurn((prev)=>prev+1)
    }
}

     switch (cell) {
        case "cell1":updateCell(setCell1, cell1,"cell1");break;
        case "cell2":updateCell(setCell2, cell2,"cell2");break;
        case "cell3":updateCell(setCell3, cell3,"cell3");break;
        case "cell4":updateCell(setCell4, cell4,"cell4");break;
        case "cell5":updateCell(setCell5, cell5,"cell5");break;
        case "cell6":updateCell(setCell6, cell6,"cell6");break;
        case "cell7":updateCell(setCell7, cell7,"cell7");break;
        case "cell8":updateCell(setCell8, cell8,"cell8");break;
        case "cell9":updateCell(setCell9, cell9,"cell9");break;
        default:break;
    }
        }


//Check Victory
useEffect(()=> {
const checkVictory = ()=>{
    if(cell1==cell2 && cell2==cell3 && cell1 != undefined){setWinningCells(["cell1","cell2","cell3"]);return true;}
    if (cell4==cell5 && cell5==cell6 && cell4!= undefined) { setWinningCells(["cell4","cell5","cell6"]);return true;}
     if (cell7==cell8 && cell8==cell9 && cell7!= undefined) {setWinningCells(["cell7","cell8","cell9"]); return true;} 
 if (cell1==cell4 && cell4==cell7 && cell1!= undefined) { setWinningCells(["cell1","cell4","cell7"]); return true;}
 if (cell2==cell5 && cell5==cell8 && cell2!= undefined) { setWinningCells(["cell2","cell5","cell8"]);return true; }
 if (cell3==cell6 && cell6==cell9 && cell3!= undefined) { setWinningCells(["cell3","cell6","cell9"]);return true; }
 if (cell1==cell5 && cell5==cell9 && cell1!= undefined) { setWinningCells(["cell1","cell5","cell9"]);return true;}
 if (cell3==cell5 && cell5==cell7 && cell3!= undefined) {setWinningCells(["cell3","cell5","cell7"]);return true;}
    return false;
    };

    const victoryResult = checkVictory();
    setVictory(victoryResult);
    if(victoryResult){setTitle(<p className="game-over">Player {currentPlayer==1?2:1} wins!</p>)}
    else if(turn>9) {setTitle(<p className="game-over">It's a Draw!</p>)}
    else {setCurrentPlayer(currentPlayer==1?2:1);setTitle(<p>Player {currentPlayer}'s Turn</p>);};

    },[cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,turn]);



//Restart Game
function restartGame(){
    setTurn(1);
    setCurrentPlayer(1);
    setTitle(<p>Player 1's Turn</p>)
    setVictory(false);
    setCell1(undefined);
    setCell2(undefined);
    setCell3(undefined);
    setCell4(undefined);
    setCell5(undefined);
    setCell6(undefined);
    setCell7(undefined);
    setCell8(undefined);
    setCell9(undefined);
    setWinningCells([]);
}




 return(  <div className="game">
 <div style={{color:currentPlayer===2?"#364F6B":"#3FC1C9"}}className="title">{title}</div>
 <div className="container">
<div className="grid">
<div onClick={playTurn} id="cell1" className="cell">{cell1 === "X" ? <ImCross className={`symbol cross ${winningCells.includes("cell1")?"winningCell":null}`} /> : cell1 === "O" ? <FaRegCircle className={`symbol circle ${winningCells.includes("cell1")?"winningCell":null}`} /> : null}</div>
<div onClick={playTurn} id="cell2" className="cell">{cell2 === "X" ? <ImCross className={`symbol cross ${winningCells.includes("cell2")?"winningCell":null}`} /> : cell2 === "O" ? <FaRegCircle className={`symbol circle ${winningCells.includes("cell2")?"winningCell":null}`} /> : null}</div>
<div onClick={playTurn} id="cell3" className="cell">{cell3 === "X" ? <ImCross className={`symbol cross ${winningCells.includes("cell3")?"winningCell":null}`} /> : cell3 === "O" ? <FaRegCircle className={`symbol circle ${winningCells.includes("cell3")?"winningCell":null}`} /> : null}</div>
<div onClick={playTurn} id="cell4" className="cell">{cell4 === "X" ? <ImCross className={`symbol cross ${winningCells.includes("cell4")?"winningCell":null}`} /> : cell4 === "O" ? <FaRegCircle className={`symbol circle ${winningCells.includes("cell4")?"winningCell":null}`} /> : null}</div>
<div onClick={playTurn} id="cell5" className="cell">{cell5 === "X" ? <ImCross className={`symbol cross ${winningCells.includes("cell5")?"winningCell":null}`} /> : cell5 === "O" ? <FaRegCircle className={`symbol circle ${winningCells.includes("cell5")?"winningCell":null}`} /> : null}</div>
<div onClick={playTurn} id="cell6" className="cell">{cell6 === "X" ? <ImCross className={`symbol cross ${winningCells.includes("cell6")?"winningCell":null}`} /> : cell6 === "O" ? <FaRegCircle className={`symbol circle ${winningCells.includes("cell6")?"winningCell":null}`} /> : null}</div>
<div onClick={playTurn} id="cell7" className="cell">{cell7 === "X" ? <ImCross className={`symbol cross ${winningCells.includes("cell7")?"winningCell":null}`} /> : cell7 === "O" ? <FaRegCircle className={`symbol circle ${winningCells.includes("cell7")?"winningCell":null}`} /> : null}</div>
<div onClick={playTurn} id="cell8" className="cell">{cell8 === "X" ? <ImCross className={`symbol cross ${winningCells.includes("cell8")?"winningCell":null}`} /> : cell8 === "O" ? <FaRegCircle className={`symbol circle ${winningCells.includes("cell8")?"winningCell":null}`} /> : null}</div>
<div onClick={playTurn} id="cell9" className="cell">{cell9 === "X" ? <ImCross className={`symbol cross ${winningCells.includes("cell9")?"winningCell":null}`} /> : cell9 === "O" ? <FaRegCircle className={`symbol circle ${winningCells.includes("cell9")?"winningCell":null}`} /> : null}</div>
 </div>
 </div>
 <button className="restart-btn" onClick={restartGame}>Restart Game</button>
 </div>);}

 export default Game;