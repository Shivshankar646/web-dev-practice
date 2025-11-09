import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar"; // ✅ imported Navbar component

export default function App() {
  return (
    <Router>
      {/* ✅ use Navbar component instead of writing <nav> here */}
      <Navbar /> 

      <div className="mt-20"> {/* margin so content doesn't hide behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
