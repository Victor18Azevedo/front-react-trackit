import styled from "styled-components";
import { accentColor } from "../constants/colors";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import ProgressContext from "../contexts/ProgressContext";
import { useContext } from "react";

export default function Menu() {
  const { progress } = useContext(ProgressContext);

  return (
    <ContainerMenu>
      <div className="menu-side-itens">
        <Link to="/habitos" data-identifier="habit-page-action">
          <div className="item-side">Hábitos</div>
        </Link>
        <div className="item-center">
          <Link to="/hoje">
            <CircularProgressbar
              value={progress}
              text={`Hoje`}
              strokeWidth={5}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: accentColor,
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </Link>
        </div>
        <Link to="/historico" data-identifier="historic-page-action">
          <div className="item-side">Histórico</div>
        </Link>
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
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
  bottom: 0;
  left: 0;
  z-index: 1;
  .menu-side-itens {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-side {
      font-size: 18px;
      color: ${accentColor};
      padding: 15px;
    }
    /* TODO: position relative */
    .item-center {
      width: 91px;
      height: 91px;
      text-align: center;
      transform: translate(0, -25%);
      flex-shrink: 0;
    }
    .CircularProgressbar-text {
      font-size: 18px;
      line-height: 91px;
    }
  }
`;
