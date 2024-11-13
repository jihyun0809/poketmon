import styled from "styled-components";
import PoketmonCard from "./PoketmonCard";
import MOCK_DATA from "./mock_data";

const StPoketmonList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 30px;
  background-color: #f0dbdf;
  border: 2px solid white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const PoketmonList = ({ addPoketmon }) => {
  return (
    <StPoketmonList>
      {MOCK_DATA.map((poketmon) => (
        <PoketmonCard
          key={poketmon.id}
          addPoketmon={addPoketmon}
          data={poketmon}
        />
      ))}
    </StPoketmonList>
  );
};

export default PoketmonList;
