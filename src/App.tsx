import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import beers from "./data/beers";
import BeerContainer from "./containers/BeerContainer/BeerContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div>Welcome to HopER</div>
        <Routes>
          <Route path="/" element={<BeerContainer beers={beers} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
