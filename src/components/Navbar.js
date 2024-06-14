import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "./Searchbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { color } = useContext(ThemeContext);
  return (
    <div className="navbar" style={{ backgroundColor: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>쿠킹 레시피</h1>
        </Link>
        <Searchbar />
        <Link to="/create">레시피 만들기</Link>
      </nav>
    </div>
  );
};

export default Navbar;
