import useCounter from '../hooks/use-counter';

import Card from './Card';

const TriggerCounter = (props) => {
  const counter = useCounter(props.trigger);


  return <Card onClick={props.onClick}>{counter}</Card>;
};

export default TriggerCounter;
