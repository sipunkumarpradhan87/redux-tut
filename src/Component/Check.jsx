import React, { useState } from 'react'

function Check() {
    let [input,setinput]=useState('');
    let [item,setitem]=useState('');
    let add=()=>{
        setinput((olditem)=>{
            return [...olditem (item)]
            
        })
    }
  return (
    <div className='mt-5' style={{marginLeft:400}}>
        <div>
      <input type="text" onChange={(e)=>setitem(e.target.value)}/><br />
      <input type="text"  />
      </div>
      

      <input type="checkbox" onClick={add}/>
  <div>

      <input type="text" value={input}/><br />
      <input type="text" />
  </div>


    </div>
  )
}

export default Check;