import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';

const Quote = () => {
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <Container className="quote">
      <figure>
        <blockquote cite="https://www.huxley.net/bnw/four.html">
          <p>
            {quote.quote}
          </p>
        </blockquote>
        <figcaption>
          —
          {quote.author}
        </figcaption>
      </figure>
      <button className="orange" type="button" onClick={getQuote}>Get Quote</button>
    </Container>
  );
};

export default Quote;
