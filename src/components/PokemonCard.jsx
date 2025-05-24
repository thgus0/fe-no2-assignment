import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const { addPokemon } = usePokemon();
  const { id, img_url, korean_name, types } = pokemon;

  return (
    <Card>
      <Image onClick={() => navigate(`/detail/${id}`)}>
        <img src={img_url} alt={korean_name} />
      </Image>
      <h3>{korean_name}</h3>
      <NumberText>No. {String(id).padStart(3, "0")}</NumberText>
      <button onClick={() => addPokemon(pokemon)}>추가</button>
    </Card>
  );
};

export default PokemonCard;

const Card = styled.div`
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  background-color: white;
  border: 1px solid rgb(218, 218, 218);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  button {
    margin-top: 0.5rem;
    padding: 0.3rem 0.6rem;
    background-color: rgb(249, 30, 30);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: rgb(212, 5, 5);
    }
  }
`;

const Image = styled.div`
  cursor: pointer;

  img {
    width: 96px;
    height: 96px;
  }
`;

const NumberText = styled.p`
  font-size: 0.85rem;
  color: rgb(112, 112, 112);
`;
