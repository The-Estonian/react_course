import { useHistory } from 'react-router-dom';
import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();
  const onAddQuoteHandler = (data) => {
    console.log(data);
    history.push("/quotes")
  };
  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};

export default NewQuote;
