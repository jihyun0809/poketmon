import styled from "styled-components";
import PoketmonCard from "./PoketmonCard";

const StDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0dbdf;
  border: px solid white;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StPoketballContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

const StPoketballBox = styled.div`
  border: 3px dashed #c7c7c7;
  border-radius: 15px;
  padding: 20px;
  margin-top: 50px;
  background-color: white;
`;

const StImg = styled.img`
  width: 100px;
`;

const StTitle = styled.h1`
  color: black;
`;

const Dashboard = ({ data, setData }) => {
  const deleteBtn = (id) => {
    const deletePoketmon = data.filter((singleData) => {
      return singleData.id !== id;
    });
    setData(deletePoketmon);
  };

  return (
    <StDashboardContainer className="dashboard-container">
      <StTitle>🍬나만의 포켓몬🍬</StTitle>
      <StPoketballContainer className="poketball-container">
        {Array(6)
          .fill()
          .map((_, index) =>
            data[index] ? (
              <PoketmonCard
                key={data[index].id}
                deleteBtn={deleteBtn}
                data={data[index]}
              />
            ) : (
              <StPoketballBox key={Math.random()} className="poketball-box">
                <StImg
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png"
                  alt=""
                />
              </StPoketballBox>
            )
          )}
      </StPoketballContainer>
    </StDashboardContainer>
  );
};

export default Dashboard;
