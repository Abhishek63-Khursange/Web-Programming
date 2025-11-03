import { useState } from "react";
export function ScoreCard(){
   
    //here useState is nothing but the we use Hooks
    const [score,setScore]=useState(0); // use state return the array and that array contain [number,function] so here we de-structure the arrya
    
    //function for increment
    const increment= ()=>{
         setScore(score + 4);
    }

    //function for decrement
    const decrement =()=>{
        setScore(score - 1);
    }
    return(
        <div>
            <h1>{score}</h1>
            <button onClick={increment}>+</button>
            <span>   </span>
            <button onClick={decrement}>-</button>
        </div>
    )
}