import styled from "styled-components";
import WeekHabit from "./WeekHabit";
import { ReactComponent as GarbageIcon } from "../../assets/images/garbage.svg";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { BASE_URL } from "../../constants/urls";

export default function HabitCard({ habit, refreshHabits }) {
  const { userData } = useContext(UserContext);

  const deleteHabit = function () {
    axios
      .delete(`${BASE_URL}/habits/${habit.id}`, userData.requestConfig)
      .then((res) => {
        refreshHabits();
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(err.response);
      });
  };
  return (
    <ContainerHabitCard>
      <p data-identifier="habit-name">{habit.name}</p>
      <WeekHabit habitDays={habit.days} />
      <StyledGarbageIcon
        onClick={() => {
          if (window.confirm("Deseja realmende apagar item?")) deleteHabit();
        }}
        data-identifier="delete-habit-btn"
      />
    </ContainerHabitCard>
  );
}
const ContainerHabitCard = styled.div`
  width: 100%;
  padding: 13px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  font-size: 20px;
  line-height: 25px;
  border-radius: 5px;
  position: relative;
  word-wrap: break-word;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  p {
    padding-right: 30px;
    margin-bottom: 8px;
  }
`;

const StyledGarbageIcon = styled(GarbageIcon)`
  position: absolute;
  top: 13px;
  right: 15px;
  height: 18px;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
  &:hover {
    cursor: pointer;
  }
`;
