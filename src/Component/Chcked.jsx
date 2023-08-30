import React, { useState } from 'react'

function Chcked() {
    let [adhar,setadhar]=useState('');
    let [pan,setpan]=useState('');
    let [showadhar,setshowadhar]=useState('')
    let [showpan,setshowpan]=useState('')

let adharbtn=()=>{
setshowadhar(!showadhar);
}
let panbtn=()=>{
 setshowpan(!showpan)
}
  return (
    <div>

        <div><label><input type="radio" name='card' checked={showadhar} onChange={adharbtn}/>adhar</label></div>
        <div><label><input type="radio"name='card' checked={showpan} onChange={panbtn}/>pan</label></div>
        
        
        <div>{showadhar&&(
            <input type="text" value={adhar} onChange={(e)=>{setadhar(e.target.value)}}/>
        )}</div>

        <div>{showpan&&(
            <input type="text" value={pan} onChange={(e)=>{setpan(e.target.value)}}/>
        )}</div>

    </div>
  )
}

export default Chcked