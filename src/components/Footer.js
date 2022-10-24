import styled from "styled-components";
import { accentColor } from "../constants/colors";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import ProgressContext from "../contexts/ProgressContext";
import { useContext, useRef } from "react";

export default function Footer() {
  const { progress } = useContext(ProgressContext);
  const footerRef = useRef();

  function scrollFooter() {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const handleScroll = () => {
    console.log(footerRef);
    window.scroll({
      top: footerRef.offsetTop,
      // top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <ContainerFooter>
      <nav className="nav-items" ref={footerRef}>
        <Link to="/habitos" data-identifier="habit-page-action">
          <div className="item">Hábitos</div>
        </Link>
        <Link to="/hoje" className="item--center">
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
        <Link to="/historico" data-identifier="historic-page-action">
          <div className="item">Histórico</div>
        </Link>
      </nav>
      {/* {scrollFooter()} */}
      {handleScroll()}
    </ContainerFooter>
  );
}

const ContainerFooter = styled.footer`
  width: 100vw;
  height: 70px;
  max-width: 600px;
  background-color: #fff;
  padding: 0 18px;
  /* position: absolute;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
  bottom: 0;
  left: 0;
  z-index: 1; */
  .nav-items {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .item {
      font-size: 18px;
      color: ${accentColor};
      padding: 15px;
    }
    .item--center {
      width: 90px;
      height: 90px;
      text-align: center;
      position: absolute;
      left: 50%;
      translate: -50%;
      top: -25px;
    }
    .CircularProgressbar-text {
      font-size: 18px;
      line-height: 91px;
    }
  }
`;
