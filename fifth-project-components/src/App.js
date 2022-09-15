import React, { useState, useCallback } from 'react';

import DemoOutput from "./components/DemoOutput/DemoOutput"

import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [showPara, setShowPara] = useState(false);

  console.log("App running");

  const paraTrigger = useCallback(() => {
    setShowPara((prevSetting) => !prevSetting);
  }, []);
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <Button onClick={paraTrigger}>Trigger Me!</Button>
      <DemoOutput show={false}/>
    </div>
  );
}

export default App;
