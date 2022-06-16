
import './App.css';
import React, { useState } from 'react';

function App() {
 /*    current - updated     */
  const [current, upDated] = useState('Back or Front');

  function thisButton(){

    upDated('Back');
  }
  function differentButton(){
    upDated('Front')
  }
  


let start = 10;

const [number, updatedCount] = useState(start);

function minusClick(){
  updatedCount(number => number - 1);
  
}

const plusClick = () =>{
  updatedCount(number => number + 1);
}

const [userinput, updatedInput] = useState('text here');

const inputButtonClick = () =>{
 
  let userInput;
      userInput = document.querySelector('.userInput');
      let userInput2 = userInput.value;
      updatedInput(userInput2);
      userInput.value = '';
    }

  return (
    
    <div className="App">
      <button onClick={thisButton}>Back Button</button>
      <span>{current}</span>
      <button onClick={differentButton}>Front Button</button>
        <br/>

      <button onClick={minusClick}>-</button>
      <span>{number}</span>
      <button onClick={plusClick}>+</button>
<br/>
<input className="userInput"></input>
<button onClick={inputButtonClick}>save</button>
<br/><span>{userinput}</span>
    </div>

  );
}

export default App;
