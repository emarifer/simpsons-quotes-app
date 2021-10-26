import { useEffect, useState } from "react";
import { Quote } from "./components/Quote";
import { Spinner } from "./components/Spinner";
import logo from "./assets/logo/simpsons-logo.png";

const initialQuote = {
  text: "",
  character: "",
  image: "",
};

const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false);

  const updateQuote = async () => {
    setLoading(true);
    const res = await fetch(URL);
    const [{ quote: text, character, image }] = await res.json();
    setQuote({ text, character, image });
    setLoading(false);
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="app">
      <h4>Random Simpsons Quotes</h4>
      <img src={logo} alt="logo simpson" />
      <button onClick={updateQuote}>Get Another</button>
      {loading ? <Spinner /> : <Quote quote={quote} />}
    </div>
  );
}

export default App;
