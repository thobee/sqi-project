import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/about";
import Profile from "./pages/Profile";
import Property from "./pages/Property";

export default function App() {
  return (
    <div>
      <div className="text-red-500">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/property" element={<Property />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
