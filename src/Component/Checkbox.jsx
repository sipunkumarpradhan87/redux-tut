import React, { useState } from 'react'

function Checkbox() {
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [sameAsCurrent, setSameAsCurrent] = useState(false);
 
  const handleCheckboxChange = () => {
    setSameAsCurrent(!sameAsCurrent);
    if (!sameAsCurrent) {
      setPermanentAddress('');
    }
  };


  return (
    <div className='continate  mt-5 ' style={{marginLeft:500}}>
      
    
    <div>
      <h2>Address Information</h2>
      <div>
        <label>Current Address:</label>
        <input
          type="text"
          value={currentAddress}
          onChange={(e) => setCurrentAddress(e.target.value)}
        />
      </div>
      <div>
        <label>
          Permanent Address:
          <input type="checkbox"
            checked={sameAsCurrent}
            onChange={handleCheckboxChange}
          />
          Same as Current
        </label>
        {!sameAsCurrent && (
          <input
            type="text"
            value={permanentAddress}
            onChange={(e) => setPermanentAddress(e.target.value)}
          />
        )}
      </div>
    </div>
    </div>
  )
}

export default Checkbox