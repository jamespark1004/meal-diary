import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const AdditionBlock = styled.div`
  h2 {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  background-color: #ffdeeb;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 480px;
  border-radius: 20px;
`;

const AddBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  height: 2rem;
  width: 50%;
  margin: auto;
  border: none;
  outline: none;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const StyledSelect = styled.select`
  height: 2rem;
  border: none;
  outline: none;
  width: 50%;
  margin: auto;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  width: 100%;
  background-color: #eebefa;
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 20px;
  &:hover {
    background-color: #f3d9fa;
  }
`;

const AdditionPage = ({ onCreate }) => {
  const dateInput = useRef();
  const timeInput = useRef();
  const menuInput = useRef();

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    date: "",
    time: "",
    menu: "",
  });

  const { date, time, menu } = inputs; //비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, //기존의 input 객체 복사한 뒤
      [name]: value,
    });
  };

  //내용 초기화
  const onReset = () => {
    setInputs({
      date: "",
      time: "",
      menu: "",
    });
  };

  const handleClick = () => {
    onCreate(inputs.date, inputs.time, inputs.menu);
    alert("저장 완료");
    onReset();

    navigate("/list", {
      state: {
        date: date,
        time: time,
        menu: menu,
        id: 1,
      },
    });
  };

  return (
    <AdditionBlock>
      <h2>식사 기록</h2>
      <AddBox>
        <StyledInput
          ref={dateInput}
          onChange={onChange}
          type="date"
          name="date"
          value={inputs.date}
        />
        <StyledSelect
          ref={timeInput}
          name="time"
          onChange={onChange}
          value={inputs.time}
        >
          <option value="" hidden>
            식사시간
          </option>
          <option value="아침">아침</option>
          <option value="점심">점심</option>
          <option value="저녁">저녁</option>
        </StyledSelect>
        <StyledInput
          ref={menuInput}
          onChange={onChange}
          type="text"
          name="menu"
          placeholder="음식"
          value={inputs.menu}
        />
        <p>{date}</p>
        <p>{time}</p>
        <p>{menu}</p>
      </AddBox>
      <StyledButton onClick={handleClick}>버튼</StyledButton>
    </AdditionBlock>
  );
};

export default AdditionPage;
