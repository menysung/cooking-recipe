import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

import "./App.css";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { mode } = useContext(ThemeContext);
  //리액트 라우트는 사용시 최상단에 BrowserRouter > Routes > Route 순으로 가야한다
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
