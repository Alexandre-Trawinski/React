import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LesPersonnages from "./pages/LesPersonnages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personnages" element={<LesPersonnages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
