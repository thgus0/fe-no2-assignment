import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonList = ({ data, onAdd }) => {
  return (
    <Wrapper>
      <Grid>
        {data.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAdd} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default PokemonList;

const Wrapper = styled.div`
  border: 1px solid rgb(218, 218, 218);
  background-color:rgb(239, 239, 239);
  padding: 2rem;
  border-radius: 12px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
`;
