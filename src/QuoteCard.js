import React from "react";

function QuoteCard(props) {
  return (
    <div>
      <p>{props.simpsonsQuote.quote} </p>
      <p>{props.simpsonsQuote.character}</p>
      <p>
        <img src={props.simpsonsQuote.image} />
      </p>
    </div>
  );
}

export default QuoteCard;
