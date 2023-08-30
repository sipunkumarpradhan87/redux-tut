import React, { useEffect, useRef, useState } from "react";

function Type({sipun})
{
    let index =useRef(0)
let [currenttext,setcurrenttext]=useState('');
useEffect(()=>{
    setTimeout(()=>{
        setcurrenttext((value)=>value +sipun.charAt(index.current))
        index.current += 1;
        
    },1000)
},[currenttext])
    return(
        <div>
          <h3>{currenttext}</h3>
        </div>
    )
}
export default Type;