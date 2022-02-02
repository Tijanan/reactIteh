import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './components/Pocetna'
import Stanje from './components/Stanje'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/stanje" element={<Stanje />} />

        </Routes>
      </Router >
    </div>
  );
}

export default App;
