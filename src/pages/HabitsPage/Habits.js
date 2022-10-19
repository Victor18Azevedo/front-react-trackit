import styled from "styled-components";
import Week from "./Week";
import { ReactComponent as GarbageIcon } from "../../assets/images/garbage.svg";

export default function Habits() {
  return (
    <ContainerHabits>
      <p>Testes de Habit</p>
      <Week />
      <StyledGarbageIcon />
    </ContainerHabits>
  );
}

const ContainerHabits = styled.div`
  width: 100%;
  padding: 13px 15px;
  padding-right: 35px;
  margin-bottom: 10px;
  background-color: #fff;
  font-size: 20px;
  line-height: 25px;
  border-radius: 5px;
  position: relative;
  word-wrap: break-word;
  p {
    margin-bottom: 8px;
  }
`;

const StyledGarbageIcon = styled(GarbageIcon)`
  position: absolute;
  top: 13px;
  right: 15px;
  height: 16px;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
`;
