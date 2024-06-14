import { useState } from "react";
import { useRef } from "react";
import "./Create.css";
import { useFetch } from "../../hooks/useFetch";

const Create = () => {
  //새 레시티 작성시 제목, 요리방법, 요리시간 입력 받아야함
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(); //리액트에서 선택 방법
  //postData 메서드로 서버로 보낼 데이터를 입력하면 요청된다
  const { postData } = useFetch("http://localhost:3030/recipes/", "POST");

  const handlesubmit = (e) => {
    e.preventDefault(); //기존 이벤트 중지시킨다
    postData({ title, ingredients, method, cookingTime: cookingTime + "분" });
  };

  const handleAdd = (e) => {
    e.preventDefault(); //기존 이벤트 중지시킨다
    const ing = newIngredient.trim(); //trim : 공백 제거한다
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">새 레시피를 추가하세요</h2>
      <form onSubmit={handlesubmit}>
        <label>
          <span>요리 제목:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        {/* recipe ingredients here */}
        <label>
          <span>요리 재료:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">
              사용
            </button>
          </div>
        </label>
        <p>
          재료들 :{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>요리 방법:</span>
          <textarea
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          />
        </label>

        <label>
          <span>쿠킹 타임 (분):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">추가</button>
      </form>
    </div>
  );
};

export default Create;
