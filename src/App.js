import React from "react";
import axios from "axios";
import QuoteCard from "./QuoteCard";

const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=num";

class App extends React.Component {
  state = { simpsonsQuotes: [] };

  getCharacters = () => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        // concatène les nouvelles quotes aux anciennes et sauvegarde tout dans allQuotes
        //const allQuotes = this.state.simpsonsQuotes.concat(data);

        // mise à jour du state avec toutes les quotes
        // Ce qui va déclencher un nouveau rendu du composant

        this.setState({
          simpsonsQuotes: data,
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.simpsonsQuotes.map((quote) => {
          return <QuoteCard simpsonsQuote={quote} />;
        })}

        <button onClick={() => this.getCharacters()}>Get new quote</button>
      </div>
    );
  }
}

export default App;
