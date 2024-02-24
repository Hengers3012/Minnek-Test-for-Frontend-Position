import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, LandingPage } from "./Pages";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
