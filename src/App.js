import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LesDetailsPersonnage from "./pages/LesDetailsPersonnage";
import LesDetailsPlanetes from "./pages/LesDetailsPlanetes";
import LesPersonnages from "./pages/LesPersonnages";
import LesPlanetes from "./pages/LesPlanetes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personnages" element={<LesPersonnages />} />
        <Route path="/personnages/:id" element={<LesDetailsPersonnage />} />
        <Route path="/planetes" element={<LesPlanetes />}/>
        <Route path="/planetes/:id" element={<LesDetailsPlanetes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
