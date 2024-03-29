import React, { useEffect, useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import Style from "../components/Style.module.css"


function Jokes({jokes,GetScore,id,score3}) {
 const[score,Setscore]=useState(0)
  function increaseScore(){
    Setscore((prev)=>{
      return prev +1
    })
  }
  function  decreaseScore(){
    Setscore((prev)=>{
      return prev -1
    })


  }
// eslint-disable
  useEffect(()=>{
    let obj={
      score,
      id1:id
      
    }
    GetScore(obj)

  },[score]) 



  return (
    <div className={Style.JokesFullDiv}>
        <div className={Style.FullCountDiv}>
            <FaCirclePlus size={35} color={"orange"} onClick={increaseScore}  />
            <div className={Style.Count}>
                <h1 className={Style.TextNumber}>{score}</h1>
            </div>
            <FaCircleMinus size={35} color={"orange"} onClick={ decreaseScore } />
        </div>
  <div className={Style.joke}>
    <h1>
 {jokes}
    </h1>
  </div>
  <h1 className={Style.Smile}>
  <h1>
  { score3>-1&& score3  >=0 && score3 < 1 && '😊'}
  {score3 >= 1 && score3 <= 2 &&  '😄'}
  {score3 > 2 && score3 <= 4 &&  '😂'}
  
  {score3 > 4 &&  '🤣'}
  {score3 < 0  && '😒'}
 
</h1>
  </h1>
      
    </div>
  )
}

export default Jokes
