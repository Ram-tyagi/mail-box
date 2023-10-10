import Auth from './Components/Auth/Auth';
import './App.css';
import Home from './Components/Home/Home';
import Mynavbar from './Components/MyNavbar/MyNavbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Allmails from './Components/Allmails/Allmails';
import SpecificMail from './Components/SpecificMail';
import SendMails from './Components/SendMails/SendMails';
function App() {
  const isloggedIn = useSelector((state) => state.credential.token);
  return (
    <BrowserRouter>
        <Mynavbar />
        <Routes>
          {isloggedIn ? (
            <>
            <Route path="/" element={<Home />} />
            <Route path="/allmails" element={<Allmails />} />
            <Route path="/allmails/:id" element={<SpecificMail />} />
              <Route path="/sendmails" element={<SendMails />} />
          </>
          ) : (
            <Route path="/auth" element={<Auth />} />
          )}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
