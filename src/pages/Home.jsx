import { useNavigate } from "react-router-dom";
import { StContainer, StImg, StButton } from "../styles/HomeStyles";



const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <StContainer className="app-container">
        <StImg
          src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"
          alt=""
        />
        <StButton onClick={() => navigate("/dex")}>
          포켓몬 도감 이동하기
        </StButton>
      </StContainer>
    </div>
  );
};

export default Home;
