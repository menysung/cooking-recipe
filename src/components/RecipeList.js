import "./RecipeList.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const RecipeList = ({ recipes }) => {
  const { mode } = useContext(ThemeContext);
  //검색한 데이터가 없을 경우 배열길이가 0이므로 바로 return, 종료 (밑으로 더 내려가지않음)
  if (recipes.length === 0) {
    return <div className="error">검색된 레시피가 없습니다.</div>;
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          {/* substring(0, 100)}... : 100자 까지만 표시하고 이후 ...로 표시*/}
          <Link to={`/recipes/${recipe.id}`}>요리하기</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
