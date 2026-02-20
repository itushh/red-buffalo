import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lander from "./pages/Lander";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lander />} />
        <Route path="*" element={<div className="flex h-dvh justify-center items-center">Under Construction</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
