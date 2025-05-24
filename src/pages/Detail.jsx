import { useParams, useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import MOCK_DATA from "../data/mock";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selected, addPokemon, removePokemon } = usePokemon();

  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));
  const isSelected = selected.some((p) => p.id === pokemon?.id);

  if (!pokemon) {
    return <p>해당 포켓몬을 찾을 수 없습니다.</p>;
  }

  const handleToggle = () => {
    if (isSelected) {
      removePokemon(pokemon.id);
    } else {
      addPokemon(pokemon);
    }
  };

  return (
    <Wrapper>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <Title>{pokemon.korean_name}</Title>
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>

      <Button onClick={handleToggle}>
        {isSelected ? "삭제" : "추가"}
      </Button>

      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 5rem;
`;

const Title = styled.h2`
  color: rgb(249, 30, 30);
`;

const Button = styled.button`
  margin-top: 1rem;
  background-color: ${props => props.children === "삭제" ? "rgb(167, 167, 167)" : "rgb(249, 30, 30)"};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.children === "삭제" ? "rgb(136, 136, 136)" : "rgb(212, 5, 5)"};
  }
`;

const BackButton = styled.button`
  margin-top: 1rem;
  background-color: rgb(239, 239, 239);
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border-color: rgb(48, 92, 252);
  }
`;