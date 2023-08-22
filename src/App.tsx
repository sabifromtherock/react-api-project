import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import { useEffect, useState } from "react";
import { Beer } from "./types/Beer";
import Nav from "./components/Nav/Nav";

function App() {
  const [isBeerDetailsLoaded, setIsBeerDetailsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [beers, setBeers] = useState<Beer[]>([]);

  let url = "https://api.punkapi.com/v2/beers?page=1&per_page=10";

  if (
    selectedFilter === "&abv_gt=6" ||
    selectedFilter === "&brewed_before=01-2010"
  )
    url += selectedFilter;

  useEffect(() => {
    const getBeers = async () => {
      const data = await (await fetch(url)).json();

      setBeers(data);
    };

    getBeers();
  }, [url]);

  return (
    <BrowserRouter>
      <div className="app">
        <Nav
          setSearchTerm={setSearchTerm}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          isBeerDetailsLoaded={isBeerDetailsLoaded}
          setIsBeerDetailsLoaded={setIsBeerDetailsLoaded}
        />
        <Routes>
          <Route path="/" element={<BeerContainer beers={beers} />} />
          <Route
            path="/beer/:id"
            element={
              <BeerDetails
                beers={beers}
                setIsBeerDetailsLoaded={setIsBeerDetailsLoaded}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
