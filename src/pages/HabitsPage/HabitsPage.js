import styled from "styled-components";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import NewHabit from "./NewHabit";
import Habits from "./Habits";
import { baseColor } from "../../constants/colors";

export default function HabitsPage() {
  return (
    <ContainerHabitsPage>
      <Header />
      <MainHabits>
        <MyHabits>
          <h2>Meus hábitos</h2>
          <button className="btn btn-add">+</button>
        </MyHabits>
        <NewHabit />
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
        <Habits />
        <Habits />
      </MainHabits>
      <Menu />
    </ContainerHabitsPage>
  );
}

const ContainerHabitsPage = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const MainHabits = styled.main`
  min-height: 100vh;
  padding: 70px 19px;
  background-color: ${baseColor};
`;

const MyHabits = styled.div`
  margin: 22px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-add {
    width: 40px;
    height: 35px;
    line-height: 35px;
    font-size: 27px;
  }
`;
