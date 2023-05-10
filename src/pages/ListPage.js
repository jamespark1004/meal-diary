import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ListBlock = styled.div`
  h2 {
    padding-top: 1rem;
    text-align: center;
  }
  background-color: #ffdeeb;
  margin: auto;
  width: 480px;
  border-radius: 20px;
`;

const ListBox = styled.div`
  display: flex;
  padding: 0.5rem;
  ul {
    font-size: 24px;
    margin: 0px auto;
    text-align: center;
    li {
      list-style-type: none;
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: #eebefa;
  margin-left: 24rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 10px;
  &:hover {
    background-color: #f3d9fa;
  }
`;

const ListPage = ({ lists }) => {
  console.log(lists);
  const navigate = useNavigate();

  const onClickAdditionPage = () => {
    navigate("/");
  };

  return (
    <ListBlock>
      <div>
        <h2>리스트</h2>
        <StyledButton onClick={onClickAdditionPage}>Back</StyledButton>
      </div>
      <ListBox>
        <ul>
          날짜
          {lists.map((list) => {
            return <li key={list.id}>{list.date}</li>;
          })}
        </ul>

        <ul>
          식사시간 날짜
          {lists.map((list) => {
            return <li key={list.id}>{list.time}</li>;
          })}
        </ul>
        <ul>
          메뉴
          {lists.map((list) => {
            return <li key={list.id}>{list.menu}</li>;
          })}
        </ul>
      </ListBox>
    </ListBlock>
  );
};

export default ListPage;
