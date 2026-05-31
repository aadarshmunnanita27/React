import React from 'react'
import { useNavigate } from 'react-router-dom';
const Support = () => {
  const navigate=useNavigate();
  function clickHandler(){
    //move to lab page
    navigate("/labs");
  }
  return (
    <div>
          <div> This is supportPage</div>
          <button onCklick={clickHandler}> Move to Labs Page</button>
    </div>
   
  )
}

export default Support