import "./App.css";
import Title from "./components/Title";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/Product";
import Goal from "./components/Goal";
import Football from "./components/Football";
import FavoriteColor from "./pages/FavoriteColor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/goal" element={<Goal goal={true} />} />
        <Route path="/football" element={<Football />} />
        <Route path="/color" element={<FavoriteColor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
