import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3030/recipes");
  return (
    <div className="home">
      {/* && 는 ex)error 데이터가 null이 아닐때 표시한다. null일 때는 표시 안됨! */}
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">로딩중 ...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
