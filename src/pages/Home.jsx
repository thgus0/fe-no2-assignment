import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" alt="pokemon logo image"/>
      <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  button {
    padding: 0.7rem 1.5rem;
    margin-top: 2rem;
    font-size: 1rem;
    border: none;
    background-color:rgb(255, 20, 20);
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }

  img {
    max-width: 300px;
    width: 100%;
    height: auto;
  }
`;
