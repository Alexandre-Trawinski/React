import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LesDetailsPersonnage from "./pages/LesDetailsPersonnage";
import LesPersonnages from "./pages/LesPersonnages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personnages" element={<LesPersonnages />} />
        <Route path="/personnages/:id" element={<LesDetailsPersonnage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
