import "./css/style.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarWarsAPIProject from "./components/ReactPortfolio/prj1/swcharacters";
import DataMapping from "./components/ReactPortfolio/prj2/reactportfolio2";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/StarWarsAPIProject" element={<StarWarsAPIProject />} />
          <Route path="/SomethingElse" element={<DataMapping />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
