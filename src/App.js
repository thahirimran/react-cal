import { useState } from 'react';
import './App.css';

function App() {

  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [result,setResult] = useState("");

  function handleAdd(){
      const sum = Number(num1) + Number(num2);
      setResult(sum);
  }

  function handleSub(){
      const sum = Number(num1) - Number(num2);
      setResult(sum);
  }

  function handleMul(){
      const sum = Number(num1) * Number(num2);
      setResult(sum);
  }

  function handleDiv(){
      const sum = Number(num1) / Number(num2);
      setResult(sum);
  }

  function handleClear(){

    setNum1("");
    setNum2("");
    setResult("");
      
  }

  return (
    <div className="App">

        <label className='label'>Num1 :</label>
        <input type="number" value={num1} className='input' placeholder='Enter Number 1' 
        onChange={function(event){
            setNum1(event.target.value)
        }}/>  <br></br> <br></br>

        <label className='label'>Num2 :</label>
        <input type="number" className='input' value={num2} placeholder='Enter Number 2' 
        onChange={function(event){
            setNum2(event.target.value)
        }}/>  <br></br> <br></br>

        <button className='button' onClick={handleAdd}>+</button> &nbsp;
        <button className='button' onClick={handleSub}>-</button> &nbsp;
        <button className='button' onClick={handleMul}>*</button> &nbsp;
        <button className='button' onClick={handleDiv}>/</button> &nbsp;

        <br></br> <br></br>

        <label className='label'>Ans :</label>
        <input className='input'  value={result} />

        <br></br> <br></br>

        <button className='button' onClick={handleClear}>Clear</button>
      
    </div>
  );
}

export default App;
