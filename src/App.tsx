import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import { useEffect, useState } from "react";
import { Beer } from "./types/Beer";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const getBeers = async () => {
      const data = await (
        await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=10")
      ).json();

      setBeers(data);
    };

    getBeers();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <div>Welcome to HopER</div>
        <Routes>
          <Route path="/" element={<BeerContainer beers={beers} />} />
          <Route path="/beer/:id" element={<BeerDetails beers={beers} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
