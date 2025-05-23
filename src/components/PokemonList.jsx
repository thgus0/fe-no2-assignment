import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonList = ({ data, onAdd }) => {
  return (
    <Wrapper>
      <h2>포켓몬 목록</h2>
      <Grid>
        {data.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAdd} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default PokemonList;

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
`;
