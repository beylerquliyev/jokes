import React, { useEffect, useState } from 'react'
import Style from "../components/Style.module.css"
import Jokes from './jokes'
import 'bootstrap/dist/css/bootstrap.min.css';


function Card({number}) {
  const[data,SetData]=useState([])
  const[scoreId,SetscoreId]=useState({})
  async function getDadJoke(number) {
    try {
      const response = await fetch(`https://icanhazdadjoke.com/search?limit=10&page=${number}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      let newData=data.results.map((item)=>{
        return {...item,score:0}
      })
   
   
      
      SetData(newData)
     
    } catch (error) {
      console.error('Ошибка при получении шутки:', error);
    }
  }

  function GetScore(e){
    SetscoreId(e)

  }
  
  function ChangeData(){
    let newData=[...data]
    if(data[1] !==undefined){
      newData[scoreId.id1].score=scoreId.score
      newData.sort((a,b)=>{
        return b.score-a.score
      })
      console.log(newData);
      SetData(newData)

    }
    else{
      return
    }
  

  


  }
   
useEffect(()=>{

  ChangeData()


},[scoreId]) // eslint-disable-next-line

  
useEffect(()=>{
  getDadJoke(number)

},[number])

  console.log(data);
  return (
    <div className={Style.FullDiv} >
        <div className={Style.leftDiv}>
            <h1 className={Style.leftText}>Jokes App</h1>
            <h1 className={Style.leftSmile}>😂</h1>
            

        </div>


        
        <div className={Style.Right}>
          {data?.map((item,index)=>{
            return <Jokes key={item.id} id={index} jokes={item.joke} GetScore={GetScore} score3={item.score} />

          })}
           


            
        </div>

      
    </div>
  )
}

export default Card
