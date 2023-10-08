import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/MainPage/Main';
import Styles from './Components/Styles';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playgame" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
