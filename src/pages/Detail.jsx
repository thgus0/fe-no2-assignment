import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../data/mock";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));

  if (!pokemon) {
    return <p>해당 포켓몬을 찾을 수 없습니다.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{pokemon.korean_name}</h1>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Detail;
  