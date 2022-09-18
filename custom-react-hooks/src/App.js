import React, { useState } from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import TriggerCounter from "./components/TriggerCounter"

function App() {
  const [trigger, setTrigger] = useState(true)
  const triggerSwitchHandler = () => {
    console.log("Switching", trigger);
    setTrigger(oldTrigger => !oldTrigger)
  }
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <TriggerCounter onClick={triggerSwitchHandler} trigger={trigger}/>
    </React.Fragment>
  );
}

export default App;
