import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20 h-[100vh]">
      <Router>
        <Routes>
          <Route path="/3D-Portfolio_Island/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
