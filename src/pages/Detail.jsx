// import React from 'react'
import MOCK_DATA from "../components/mock_data";
import { useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";

const StDiv = styled.div`
  flex-wrap: wrap;
  margin-top: 50px;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 150px 50px;
  border-radius: 18px;
  img {
    width: 150px;
    &:hover {
      transform: scale(1.5);
      transition: 0.5s;
    }
  }
  button {
    border: none;
    padding: 15px;
    font-size: 15px;
    margin-top: 30px;
    border-radius: 8px;
    background-color: #5acea7;
    font-weight: 600;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: #fffa68;
    }
  }
`;

const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const poketmon = MOCK_DATA.find((data) => data.id === Number(id));

  if (!poketmon) {
    return (
      <div>
        <p>이 포켓몬은 몬스터볼에 없어요!</p>
        <button onClick={() => navigate("/dex")}>뒤로 가기</button>
      </div>
    );
  }
  return (
    <StDiv>
      <img src={poketmon.img_url} alt={poketmon.korean_name} />
      <h2>{poketmon.korean_name}</h2>
      <p>타입 : {poketmon.types.join(", ")}</p>
      <p>{poketmon.description}</p>
      <button onClick={() => navigate("/dex")}>돌아가기</button>
    </StDiv>
  );
};

export default Detail;
