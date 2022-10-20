import styled from "styled-components";
import WeekHabit from "./WeekHabit";
import { ReactComponent as GarbageIcon } from "../../assets/images/garbage.svg";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { BASE_URL } from "../../constants/urls";

export default function Habits({ habits, setHabits }) {
  const { userData } = useContext(UserContext);

  const deleteHabit = function (id) {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    axios
      .delete(`${BASE_URL}/habits/${id}`, config)
      .then((res) => {
        setHabits(habits.filter((habit) => habit.id !== id));
        // console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <ContainerHabits>
      {habits.map((habit) => (
        <BoxHabit key={habit.id}>
          <p>{habit.name}</p>
          <WeekHabit habitDays={habit.days} />
          <StyledGarbageIcon onClick={() => deleteHabit(habit.id)} />
        </BoxHabit>
      ))}
    </ContainerHabits>
  );
}

const ContainerHabits = styled.div``;

const BoxHabit = styled.div`
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
  &:hover {
    cursor: pointer;
  }
`;
