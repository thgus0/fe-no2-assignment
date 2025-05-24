import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";

const Dashboard = () => {
  const { selected, removePokemon } = usePokemon();

  return (
    <Wrapper>
      <Title>나만의 포켓몬</Title>
      <List>
        {selected.map((p) => (
          <Card key={p.id}>
            <img src={p.img_url} alt={p.korean_name} />
            <p>{p.korean_name}</p>
            <TypeText>{p.types.join(", ")}</TypeText>
            <button onClick={() => removePokemon(p.id)}>삭제</button>
          </Card>
        ))}
      </List>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  background-color:rgb(247, 247, 247);
  padding: 1.5rem;
  border-radius: 12px;
`;

const Title = styled.h2`
  color: rgb(249, 30, 30);
  text-align: center;
  margin-bottom: 1rem;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Card = styled.div`
  border: 1px solid rgb(218, 218, 218);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  background: white;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 80px;
    height: 80px;
  }

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

const TypeText = styled.p`
  font-size: 0.85rem;
  color: rgb(112, 112, 112);
`;

