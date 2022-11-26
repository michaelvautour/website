import "./css/style.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Portfolio />
      {/* Incorporate React Router for Portfolio sites */}
    </div>
  );
}

export default App;
