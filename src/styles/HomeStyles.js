import styled from "styled-components";

const StContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StImg = styled.img`
  width: 600px;
  margin: 20px;
`;

const StButton = styled.button`
  background-color: #5acea7;
  border: none;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    background-color: #15d675;
  }
`;
export { StContainer, StImg, StButton };
