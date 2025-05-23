import styled from "styled-components";

const Dashboard = ({ selected, onRemove }) => {
  return (
    <Wrapper>
      <h2>내 포켓몬 (최대 6마리)</h2>
      <List>
        {selected.map((p) => (
          <Card key={p.id}>
            <img src={p.img_url} alt={p.korean_name} />
            <p>{p.korean_name}</p>
            <button onClick={() => onRemove(p.id)}>삭제</button>
          </Card>
        ))}
      </List>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  border: 2px solid #444;
  padding: 1rem;
  border-radius: 12px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;

  img {
    width: 80px;
    height: 80px;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.3rem 0.6rem;
    background-color: crimson;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;
