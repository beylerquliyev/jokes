
import Card from "./components/Card";
import Style from "../src/components/Style.module.css"
import PaginationComponent from "../src/components/Pagination"
import { useState } from "react";
 

function App() {
  const[number,Setnumber]=useState(1)
 function GetNumber(e){

  Setnumber(e)

 }
 console.log(number);


  return (
    <div className={Style.App}>


<div className={Style.CardDiv}>
<Card number={number}/>
<PaginationComponent GetNumber={GetNumber}  />

</div>
    </div>

  );
}

export default App;
