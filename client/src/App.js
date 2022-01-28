import Landing from "./Pages/Landing/Landing";
import Shop from "./Pages/Shop/Shop";
import Checkout from "./Pages/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/Checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
