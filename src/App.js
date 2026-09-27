import logo from './logo.svg';
import Home from "./pages/Home";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route path="/" exact element={Home} />
            <Route path="/about" element={About} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
