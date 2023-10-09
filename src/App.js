import Auth from './Components/Auth/Auth';
import './App.css';
import Home from './Components/Home/Home';
import Mynavbar from './Components/MyNavbar/MyNavbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isloggedIn = useSelector((state) => state.credential.token);
  return (
    <BrowserRouter>
        <Mynavbar />
        <Routes>
          {isloggedIn ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/auth" element={<Auth />} />
          )}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
