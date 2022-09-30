import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const onAddQuoteHandler = (data) => {
    console.log(data);
  };
  return <QuoteForm onAddQuote={onAddQuoteHandler}/>;
};

export default NewQuote;
