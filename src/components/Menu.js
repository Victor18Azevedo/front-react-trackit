import styled from "styled-components";
import { accentColor } from "../constants/colors";
export default function Menu() {
  return (
    <ContainerMenu>
      <div className="menu-side-itens">
        <div className="item-side">Hábitos</div>
        <div className="item-center">Hoje</div>
        <div className="item-side">Histórico</div>
      </div>
    </ContainerMenu>
  );
}

const ContainerMenu = styled.div`
  width: 100vw;
  height: 70px;
  max-width: 600px;
  background-color: #fff;
  padding: 0 36px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  .menu-side-itens {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-side {
      color: ${accentColor};
      font-size: 18px;
    }
    .item-center {
      background-color: ${accentColor};
      color: #fff;
      width: 91px;
      height: 91px;
      line-height: 91px;
      text-align: center;
      border-radius: 50%;
      transform: translate(0, -25%);
    }
  }
`;
