import "./css/style.css";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import Portfolio from "./components/VanillaPortfolio/vanillaportfolio";
// import Footer from "./components/Footer/Footer";
// import ReactPortfolio from "./components/ReactPortfolio/reactportfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarWarsAPIProject from "./components/ReactPortfolio/prj1/swcharacters";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/components/ReactPortfolio/prj1/swcharacters"
            element={<StarWarsAPIProject />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
