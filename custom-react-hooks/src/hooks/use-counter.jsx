import { useState, useEffect } from 'react';

const useCounter = (triggerBool = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if (triggerBool) {
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [triggerBool]);
  return counter;
};

export default useCounter;
