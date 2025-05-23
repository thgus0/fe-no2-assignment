import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, onAdd }) => {
  const navigate = useNavigate();
  const { id, img_url, korean_name, types } = pokemon;

  return (
    <Card>
      <Image onClick={() => navigate(`/detail/${id}`)}>
        <img src={img_url} alt={korean_name} />
      </Image>
      <h3>{korean_name}</h3>
      <p>{types.join(", ")}</p>
      <button onClick={() => onAdd(pokemon)}>추가</button>
    </Card>
  );
};

export default PokemonCard;

const Card = styled.div`
  border: 1px solid #aaa;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;

  button {
    margin-top: 0.5rem;
    padding: 0.4rem 1rem;
    background-color: #00bcd4;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const Image = styled.div`
  cursor: pointer;

  img {
    width: 96px;
    height: 96px;
  }
`;
