import "./Searchbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`); //검색페이지로 간다
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Searchbar;
