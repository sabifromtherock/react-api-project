import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import Nav from "./components/Nav/Nav";
import { Beer } from "./types/Beer";

import "./App.scss";
import NotExist from "./components/NotExist/NotExist";

function App() {
  const [isBeerDetailsLoaded, setIsBeerDetailsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [allBeers, setAllBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const getAllBeers = async () => {
      let page = 1;
      let allBeers: Beer[] = [];

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=80`;
        const response = await fetch(url);

        if (!response.ok) {
          console.error(`Failed to fetch beers for page ${page}`);
          break;
        }

        const beers = await response.json();

        if (beers.length === 0) {
          break;
        }

        allBeers = allBeers.concat(beers);

        page++;
      }
      setAllBeers(allBeers);
    };

    getAllBeers();
  }, []);

  const filteredBeers = allBeers.filter((beer) => {
    if (searchTerm)
      return beer.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedFilter === "abv") return beer.abv > 6;

    if (selectedFilter === "ph") return beer.ph < 4;

    if (selectedFilter === "brewed")
      return new Date("01/01/2010") > new Date(`01/${beer.first_brewed}`);

    return true;
  });

  return (
    <HashRouter>
      <div className="app">
        <Nav
          setSearchTerm={setSearchTerm}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          isBeerDetailsLoaded={isBeerDetailsLoaded}
          setIsBeerDetailsLoaded={setIsBeerDetailsLoaded}
        />
        <Routes>
          <Route path="/" element={<BeerContainer beers={filteredBeers} />} />
          <Route
            path="/beer/:id"
            element={
              <BeerDetails
                beers={filteredBeers}
                setIsBeerDetailsLoaded={setIsBeerDetailsLoaded}
              />
            }
          />
          <Route path="*" element={<NotExist />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
