import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
// import useHistory from 'react-router-dom;'

function PageWithSaveButton() {
  const [data, setData] = useState('');
  const history = useHistory();
// let history=useHistory(' ');


  const handleSave = () => {
    // Set data in state
    setData('Data to display on another page');
    
    // Navigate to display page
    history.push('/display');
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default PageWithSaveButton;