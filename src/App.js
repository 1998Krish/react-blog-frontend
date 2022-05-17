import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // psudo user 
  const currentUser = false;
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/write" element={currentUser ? <Write/> : <Register/>} />
        <Route path="/setting" element={currentUser ? <Setting/> : <Register/>} />
        <Route path="/login" element={currentUser ? <Home/> : <Login/>} />
        <Route path="/register" element={currentUser ? <Home/> : <Register/>} />
        <Route path="/post/:postId" element={<Single/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
