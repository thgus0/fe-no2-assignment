import MOCK_DATA from "../data/mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const Dex = () => {
  return (
    <Container>
      <Dashboard />
      <PokemonList data={MOCK_DATA} />
    </Container>
  );
};

export default Dex;

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
