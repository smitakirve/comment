import { useState } from "react"

export default function LudoBoard(){
    let[ moves,setMoves]= useState({ blue:0, green:0, red : 0, yellow:0});

    let updateblue=()=>{
                
        console.log(`moves= ${moves.blue}`)
        setMoves((preMoves)=>{
            return   {...moves , blue: preMoves.blue+1}
    });    
    }

    let updategreen=()=>{
        
        console.log(`moves= ${moves.green}`)
        setMoves((preMoves)=>{
            return   {...moves , green: preMoves.green+1}
    });    
    }

    let updatered=()=>{
     
        console.log(`moves= ${moves.red}`)
        setMoves((preMoves)=>{
            return   {...moves , red: preMoves.red+1}
    });    
    }

    let updateyellow=()=>{
        
        console.log(`moves= ${moves.yellow}`)
        setMoves((preMoves)=>{
            return   {...moves , yellow: preMoves.yellow+1}
    });    
    }
    return(
        <div>
            <p>Game begins</p>
            <div className="ludo">
                <p>Blue ={moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateblue}>+1</button>
                <p>Green ={moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updategreen}>+1</button>
                <p>Red ={moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updatered}>+1</button>
                <p>Yellow ={moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}} onClick={updateyellow}>+1</button>
                
            </div>
        </div>
    )
}