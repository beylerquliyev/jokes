import { useEffect, useState } from "react";
import Style from "../components/Style.module.css"
import ReactPaginate from 'react-paginate';


function PaginationComponent({GetNumber}) {
    const[Choose,SetChoose]=useState(1)
    function choosePage(e){
        
       
       
        if(e.nextSelectedPage===undefined){
            return
        }
        else{
            let number=e.nextSelectedPage +1
            SetChoose(number)

        }
       
  
    }
    // eslint-disable

useEffect(()=>{
    GetNumber(Choose)

},[Choose]) 

    return (
      <ReactPaginate
        pageCount={40}
       
        previousLabel={'<'}
        nextLabel={'>'}
        onClick={choosePage}
        
        pageClassName={Style.LiPaginate}
        nextClassName={Style.LiPaginate}
        previousClassName={Style.LiPaginate}
        nextLinkClassName={Style.LiPaginate}
        previousLinkClassName={Style.LiPaginate}
        pageRangeDisplayed={10}
        className={Style.FullDivPaginate}
        activeClassName={Style.ActivePaginate}
        breakClassName={Style.LiPaginate}

        

        
      />
    );
  }
  
  export default PaginationComponent;