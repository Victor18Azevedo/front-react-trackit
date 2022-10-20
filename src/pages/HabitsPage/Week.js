import styled from "styled-components";
import { DAYS } from "../../constants/weekDays";
import {
  dayTextColorSelected,
  dayTextColorNotSelected,
  dayBackColorSelected,
  dayBackColorNotSelected,
  dayBorderColorSelected,
  dayBorderColorNotSelected,
} from "../../constants/colors";

export default function Week({ habitDays, setHabitDays }) {
  const handleDay = function (dayNumber) {
    if (!habitDays.includes(dayNumber)) {
      setHabitDays([...habitDays, dayNumber].sort());
    } else {
      setHabitDays(habitDays.filter((d) => d !== dayNumber));
    }
  };

  const isSelected = function (dayNumber) {
    if (habitDays) {
      return habitDays.includes(dayNumber) ? true : false;
    }
    return false;
  };

  return (
    <ContainerWeek>
      {DAYS.map((day, index) => (
        <Day
          key={index}
          onClick={() => handleDay(index)}
          styleIsSelected={isSelected(index)}
        >
          {day}
        </Day>
      ))}
    </ContainerWeek>
  );
}

const ContainerWeek = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

const Day = styled.div`
  width: 30px;
  height: 30px;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: ${(props) =>
    props.styleIsSelected ? dayTextColorSelected : dayTextColorNotSelected};
  background-color: ${(props) =>
    props.styleIsSelected ? dayBackColorSelected : dayBackColorNotSelected};
  border: 1px solid
    ${(props) =>
      props.styleIsSelected
        ? dayBorderColorSelected
        : dayBorderColorNotSelected};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
