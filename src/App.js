import Landing from "./Pages/Landing/Landing";
import Shop from "./Pages/Shop/Shop";
import Checkout from "./Pages/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
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

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
