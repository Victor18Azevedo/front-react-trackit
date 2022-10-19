import styled from "styled-components";
import { DAYS } from "../../constants/weekDays";
import { inputColor, weekColor } from "../../constants/colors";

export default function Week() {
  return (
    <ContainerWeek>
      {DAYS.map((day, index) => (
        <div key={index} className="box-day">
          {day}
        </div>
      ))}
    </ContainerWeek>
  );
}

const ContainerWeek = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  .box-day {
    width: 30px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    /* color: ${inputColor}; */
    color: #fff;
    /* background-color: #fff; */
    background-color: ${weekColor};
    /* border: 1px solid ${inputColor}; */
    border: 1px solid ${weekColor};
    border-radius: 5px;
  }
`;
