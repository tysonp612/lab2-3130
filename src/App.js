import "./App.css";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import {useState} from "react";
//PAGES
import Home from './Home';
import Contact from './Contact';
import About from './About';



function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount}/>} />
        <Route path="/home" element={<Home count={count} setCount={setCount}/>}/>
        <Route path="/contact" element={<Contact count={count}/>} />
        <Route path="/about" element={<About count={count}/>} />
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
