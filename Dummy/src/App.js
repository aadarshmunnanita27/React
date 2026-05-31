import React, { useEffect, useState } from 'react'
import './App.css';


function App() {
  const [text, setText] = useState('')

  function changeHandler(event) {
    setText(event.target.value);
  }

  // Variation1 - Every Render 
  // useEffect(() => {
  //   console.log("UI Renderer done")
  // });

  // Variation2 - First Render
  // useEffect(() => {
  //   console.log("UI Renderer done");
  // },[]);

  // Variation3 - first render + Whenever Dependencies CHanges
  
  useEffect(() => {
    console.log("UI Renderer changed");
  }, [text]);

  // Variation4 - To Handle Unmounting of Component  
  useEffect(() => {
    //add event listner
    console.log(" Listner Added");
    //remove event listner
    return () => {
      console.log(" Listner Removed");
    }
  }, [text]);

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;

