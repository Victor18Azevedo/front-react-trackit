import styled from "styled-components";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { baseColor } from "../../constants/colors";

export default function HistoryPage() {
  return (
    <ContainerHistoryPage>
      <Header />
      <MainHistory>
        <div className="box-title">
          <h2>Histórico</h2>
        </div>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </MainHistory>
      <Menu />
    </ContainerHistoryPage>
  );
}

const ContainerHistoryPage = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const MainHistory = styled.main`
  min-height: 100vh;
  padding: 70px 19px;
  background-color: ${baseColor};
  .box-title {
    margin: 22px 0 20px;
  }
`;
