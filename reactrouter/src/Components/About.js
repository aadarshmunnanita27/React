import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
   function clickHandler(){
    //move to support route
    navigate("/support");
   }

  return (
    <div className="">
      <div>this is about Page</div>
      <button onClick={() => {
        navigate("/support")
      }}>Go to Support</button>
      <button onClick={clickHandler}>Move to support Page</button>
    </div>
  )
}

export default About