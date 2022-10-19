import styled from "styled-components";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import TodayHabit from "./TodayHabit";
import { baseColor, lightTextColor, goalColor } from "../../constants/colors";

export default function TodayPage() {
  // useEffect(() => {
  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return (
    <ContainerTodayPage>
      <Header />
      <MainToday>
        <BoxDay>
          <h2>Segunda, 17/10</h2>
          <p className="habits-goal--no">Nenhum hábito concluído ainda</p>
          <p className="habits-goal">67% dos hábitos concluídos</p>
        </BoxDay>
        <TodayHabit />
      </MainToday>
      <Menu />
    </ContainerTodayPage>
  );
}

const ContainerTodayPage = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const MainToday = styled.main`
  min-height: 100vh;
  padding: 70px 19px;
  background-color: ${baseColor};
`;

const BoxDay = styled.div`
  margin: 22px 0 20px;
  .habits-goal--no {
    color: ${lightTextColor};
  }
  .habits-goal {
    color: ${goalColor};
  }
`;
